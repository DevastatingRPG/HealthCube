import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const formsDirectory = path.join(process.cwd(), 'forms'); // Replace 'forms' with your actual directory

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formTypes = fs.readdirSync(formsDirectory);
    res.status(200).json({ formTypes });
  } catch (error) {
    console.error('Error fetching form types', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
