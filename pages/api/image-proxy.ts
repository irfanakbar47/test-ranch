import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface QueryParams {
  path?: string | string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query as QueryParams;

  if (!path || Array.isArray(path)) {
    res.status(400).send('Invalid path parameter');
    return;
  }
  
  const imageUrl = `${process.env.INSTAPROTEK_UPLOAD_API}/file?path=${path}`;
  
  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
    });

    const contentType = response.headers['content-type'] || 'image/jpeg';

    res.setHeader('Content-Type', contentType);
    res.send(Buffer.from(response.data));
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
}
