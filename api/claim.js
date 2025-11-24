// api/claim.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { latitude, longitude, accuracy, timestamp, userAgent } = req.body;

    // Simple validation
    if (
      typeof latitude !== "number" ||
      typeof longitude !== "number" ||
      typeof accuracy !== "number"
    ) {
      return res.status(400).json({ error: "Invalid data" });
    }

    // Here you can save the data to a database or Google Sheet
    // Example: console.log
    console.log("Claim received:", {
      latitude,
      longitude,
      accuracy,
      timestamp,
      userAgent,
    });

    // Respond with JSON
    return res.status(200).json({ message: "Claim received successfully!" });
  } catch (error) {
    console.error("Error in /api/claim:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
