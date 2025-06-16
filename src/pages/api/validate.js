export const config = {
  api: {
    bodyParser: true,
  },
};

export default function handler(req, res) {
  const storedKey = process.env.VALIDATION_KEY;
  const userKey = req.body?.key;

  console.log("Validation request body:", req.body);
  console.log("Stored key:", storedKey);

  if (!userKey) {
    return res.status(400).json({ error: "Missing key in request body" });
  }

  if (userKey === storedKey) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(401).json({ valid: false });
  }
}
