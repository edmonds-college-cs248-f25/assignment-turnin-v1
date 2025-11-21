// Express code for fullstack-starter
// 
// The commented examples below show where and how to add:
//   • GET routes with query parameters
//   • POST routes that accept JSON bodies
// You may use these as a guide when building your project.
//
// --- Example: Query string handling (GET) ---
// app.get("/api/items", (req, res) => {
//   const category = req.query.category; // e.g. /api/items?category=books
//   // TODO: Filter or lookup based on category
//   res.json({ example: `You asked for category: ${category}` });
// });

// --- Example: JSON body handling (POST) ---
// app.use(express.json());  // uncomment when you need to accept JSON bodies

// app.post("/api/submit", (req, res) => {
//   const data = req.body;  // parsed JSON from client
//   // TODO: Validate/store/process 'data'
//   res.json({ status: "received", received: data });
// });


import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static client files
app.use(express.static("public"));

// Example API endpoint
app.get("/api/example", (req, res) => {
  res.json({ message: "Hello from your API!" });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
