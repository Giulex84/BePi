// pages/api/validate.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'validation-key.txt');
    const key = fs.readFileSync(filePath, 'utf8').trim();
    res.status(200).json({ key });
  } catch (err) {
    console.error('Errore nella lettura della chiave:', err);
    res.status(500).json({ error: 'Errore durante la lettura della chiave' });
  }
}
