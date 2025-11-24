// pages/api/claim.js (Next.js)
import fetch from "node-fetch"; // only needed for Next.js < 13.4

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    // Google Apps Script URL
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbw6XSrCvkw9-iDpZEUX-XVDsMn4ZGqFHsAG3Lt1V1IzsoVAPJz2dKWMJlIdYYKI3SU/exec"; // replace with your URL

    // Send POST request to Google Apps Script
    const googleRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resultText = await googleRes.text(); // Apps Script usually returns plain text

    // Respond to frontend
    res.status(200).json({ message: "Claim sent!", sheetResponse: resultText });
  } catch (err) {
    console.error("Error sending to Google Sheet:", err);
    res.status(500).json({ error: "Failed to send claim" });
  }
}
