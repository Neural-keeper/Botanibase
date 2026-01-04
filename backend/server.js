const db = require("./db/database");

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API
app.post("/recommend", (req, res) => {
  const { month } = req.body;

  if (!month || month < 1 || month > 12) {
    return res.status(400).json({ error: "Invalid month" });
  }

  const query = `
    SELECT name
    FROM plants
    WHERE start_month <= ? AND end_month >= ?
  `;

  db.all(query, [month, month], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ recommendations: rows });
  });
});


// Root route (optional clarity)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});

