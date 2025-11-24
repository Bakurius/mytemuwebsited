export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbw6XSrCvkw9-iDpZEUX-XVDsMn4ZGqFHsAG3Lt1V1IzsoVAPJz2dKWMJlIdYYKI3SU/exec";

    const googleRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resultText = await googleRes.text(); // plain text from Apps Script
    console.log("Google response:", resultText);

    res.status(200).json({ message: "Claim sent!", sheetResponse: resultText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send claim to Google Sheet" });
  }
}
