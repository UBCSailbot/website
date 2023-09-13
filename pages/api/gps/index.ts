import { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongoDB from '@/lib/mongodb';
import GPS from '@/models/GPS';

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
        res.status(400).json({ success: false, message: error.message })
      }
      break
    case 'POST':
      try {
        const gps = await GPS.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: gps })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
