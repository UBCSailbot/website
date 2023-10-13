import { NextApiRequest, NextApiResponse } from 'next';
import ConnectMongoDB from '@/lib/mongodb';
import GPS from '@/models/GlobalPath';
import GlobalPath from '@/models/GlobalPath';

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
        const gPath = await GlobalPath.find({}).select('-_id -__v');
        res.status(200).json({ success: true, data: gPath });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
