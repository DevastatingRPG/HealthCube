
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const uploadsDir = path.join(process.cwd(), 'uploads'); // Assuming uploads are stored in the 'uploads' folder
    const files = fs.readdirSync(uploadsDir);
    res.status(200).json({ files });
  } catch (error) {
    console.error('Error fetching files', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
