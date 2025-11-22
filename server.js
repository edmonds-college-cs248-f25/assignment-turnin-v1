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
import fs from "fs";



const app = express();
const PORT = process.env.PORT || 3000;

// Serve static client files
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true })); // for simple HTML form POST

// Example API endpoint
/*
app.get("/api/example", (req, res) => {
  res.json({ message: "Hello from your API!" });
});
*/

// Simple HTML form POST endpoint
app.post("/submit", (req, res) => {
  console.log("Name: " + req.body.name); // DEBUG
  try {
     let filename = "data/" + req.body.name+"_"+req.body.email+"_"+req.body.assignmentNumber;
     fs.writeFileSync(filename, req.body.submission, 'utf8');
     console.log('File written successfully synchronously.');
     res.send("Your submission was successfully saved, " + req.body.name);
  } catch (err) {
    console.error('An error occurred:', err);
    res.send("Server failed to save your submission. Please try again");
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
