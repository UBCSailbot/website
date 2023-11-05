import { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongoDB from '@/lib/mongodb';
import LocalPath from '@/models/LocalPath';

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
        const localPath = await LocalPath.find({}).select({ 'waypoints._id': 0, '_id': 0, '__v': 0 });
        res.status(200).json({ success: true, data: localPath });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
