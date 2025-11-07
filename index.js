const express = require("express");
const { DateTime } = require("luxon");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// API route for time conversion
app.post("/convert", (req, res) => {
  const { time, fromZone, toZone } = req.body;

  try {
    const converted = DateTime.fromISO(time, { zone: fromZone }).setZone(toZone);
    res.json({
      success: true,
      convertedTime: converted.toFormat("yyyy-MM-dd HH:mm:ss"),
    });
  } catch (error) {
    res.json({ success: false, message: "Invalid time or timezone" });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`Time zone converter running: http://localhost:${PORT}`);
});
