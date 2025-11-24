import fetch from "node-fetch";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("New claim received:", data);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Apps Script error:", response.statusText);
        return res
          .status(500)
          .json({ message: "Failed to send to Google Sheet" });
      }

      return res.status(200).json({ message: "Claim received successfully!" });
    } catch (err) {
      console.error("API error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }
}
