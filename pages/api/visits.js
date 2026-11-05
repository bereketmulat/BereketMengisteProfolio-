// Visitor counter backed by Upstash Redis (add it from the Vercel Marketplace).
// Works with either env var naming that Vercel / Upstash sets up.
const BASE = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = "portfolio:visitors";

async function redis(command) {
  const res = await fetch(`${BASE}/${command}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) throw new Error(`Redis error ${res.status}`);
  const data = await res.json();
  return data.result;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  // Not configured yet: the badge simply stays hidden.
  if (!BASE || !TOKEN) return res.status(200).json({ count: null });

  try {
    // POST = a new visitor (counts once), GET = just read the number
    const result = req.method === "POST" ? await redis(`incr/${KEY}`) : await redis(`get/${KEY}`);
    return res.status(200).json({ count: Number(result) || 0 });
  } catch (err) {
    return res.status(200).json({ count: null });
  }
}
