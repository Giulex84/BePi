export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Request body:', req.body); // 👈 utile per il debug

  const storedKey = process.env.VALIDATION_KEY;
  const userKey = req.body?.key;

  if (!userKey) {
    return res.status(400).json({ error: 'Missing key in request body' });
  }

  if (userKey === storedKey) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(401).json({ valid: false });
  }
}
