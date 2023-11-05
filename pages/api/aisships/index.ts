import { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongoDB from '@/lib/mongodb';
import AISShips from '@/models/AISShips';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
)

{
  const { method } = req;

  await ConnectMongoDB();

  switch (method) {
    case 'GET':
      try {
        const aisships = await AISShips.find({}).select({ 'ships._id': 0, '_id': 0, '__v': 0 });
        res.status(200).json({ success: true, data: aisships });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
