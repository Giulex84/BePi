export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (req.headers['content-type'] !== 'application/json') {
    return res.status(400).json({ error: 'Content-Type must be application/json' });
  }

  console.log('req.body:', req.body); // 👈 questo stampa il corpo nei log Vercel

  const storedKey = process.env.VALIDATION_KEY;
  const userKey = req.body.key;

  if (userKey === storedKey) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(401).json({ valid: false });
  }
}
