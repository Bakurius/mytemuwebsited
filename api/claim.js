<<<<<<< HEAD
import fetch from "node-fetch";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
=======
// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     console.log("New claim received:", data); // will appear in Vercel logs

//     // Optionally: Save to a free DB (MongoDB Atlas, Supabase, etc.) here
//     // or send an email/notification

//     return res.status(200).json({ message: "Claim received successfully!" });
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     return res
//       .status(405)
//       .json({ message: `Method ${req.method} Not Allowed` });
//   }
// }

import fetch from "node-fetch"; // for Vercel Node.js
>>>>>>> fdf1da3310371ad687cd594eaa33a6fae958c2f4

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("New claim received:", data);

<<<<<<< HEAD
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
=======
    // Send to Google Sheet
    await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return res
      .status(200)
      .json({ message: "Claim received and sent to Sheet!" });
>>>>>>> fdf1da3310371ad687cd594eaa33a6fae958c2f4
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }
}
