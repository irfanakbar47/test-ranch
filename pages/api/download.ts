import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'instaProtek_enterprise_bulk_registration_template.xlsx');

    const fileBuffer = await fs.readFile(filePath);

    // Set headers to force download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="instaProtek_enterprise_bulk_registration_template.xlsx"');

    // Send the file
    res.send(fileBuffer);
  } catch (error) {
    res.status(500).json({ error: 'File not found or error reading the file.' });
  }
}
