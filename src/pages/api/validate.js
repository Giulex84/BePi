export default function handler(req, res) {
  const storedKey = process.env.VALIDATION_KEY;
  const userKey = req.body.key;

  if (userKey === storedKey) {
    res.status(200).json({ valid: true });
  } else {
    res.status(401).json({ valid: false });
  }
}
