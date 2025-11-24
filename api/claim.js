export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("New claim received:", data); // will appear in Vercel logs

    // Optionally: Save to a free DB (MongoDB Atlas, Supabase, etc.) here
    // or send an email/notification

    return res.status(200).json({ message: "Claim received successfully!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }
}
