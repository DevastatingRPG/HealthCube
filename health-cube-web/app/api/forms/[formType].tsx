import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const formsDirectory = path.join(process.cwd(), 'forms');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { formType } = req.query;

  if (!formType) {
    res.status(400).json({ error: 'Form type not provided' });
    return;
  }

  // Ensure formType is always a string
  const formTypeString = Array.isArray(formType) ? formType[0] : formType;

  const formTypeDirectory = path.join(formsDirectory, formTypeString);

  try {
    const responses = fs.readdirSync(formTypeDirectory);
    res.status(200).json({ responses });
  } catch (error) {
    console.error(`Error fetching responses for form type ${formTypeString}`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
