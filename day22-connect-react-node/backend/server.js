const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5005;

// Enable CORS for all requests (allows frontend on port 3000 to reach this backend)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// In-memory mock tasks array
const tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node.js" },
  { id: 3, title: "Connect React and Node" }
];

// GET endpoint to retrieve tasks
app.get("/api/tasks", (req, res) => {
  console.log("GET /api/tasks request received");
  res.json(tasks);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
