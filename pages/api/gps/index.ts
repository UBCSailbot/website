import { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongoDB from '@/lib/mongodb';
import Pet from '@/models/GPS';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await ConnectMongoDB()

  switch (method) {
    case 'GET':
      try {
        const gps = await GPS.find({}) /* get all the gps data in our database */
        res.status(200).json({ success: true, data: gps })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
