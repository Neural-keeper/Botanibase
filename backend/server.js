const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// TEMP DATA
const plants = [
  { name: "Basil", startMonth: 4, endMonth: 9 },
  { name: "Lettuce", startMonth: 3, endMonth: 5 },
  { name: "Garlic", startMonth: 9, endMonth: 11 }
];

// API
app.post("/recommend", (req, res) => {
  const { month } = req.body;

  const results = plants.filter(
    plant => month >= plant.startMonth && month <= plant.endMonth
  );

  res.json({ recommendations: results });
});

// Root route (optional clarity)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});

