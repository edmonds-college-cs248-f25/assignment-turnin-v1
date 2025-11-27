// Express code for assignment-turnin-v1
// this version handles "classic" urlencoded form data POST
// see assignment-turnin-v2-json for JSON handling version

import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static client files
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true })); // for simple HTML form POST

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
