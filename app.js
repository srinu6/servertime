const express = require("express");
const app = express();
const ntpClient = require("ntp-client");

// Define the /api/current-time route
app.get("/api/current-time", (req, res) => {
  ntpClient.getNetworkTime("pool.ntp.org", 123, (err, date) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve the current time." });
    } else {
      const currentTime = date.toISOString();
      res.json({ time: currentTime });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
