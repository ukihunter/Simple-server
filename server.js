const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // File system module to read the directory

const app = express();
const port = 3000;

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Folder to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Filename with timestamp
  },
});

const upload = multer({ storage: storage });

// Route to display files in the uploads folder
app.get("/", (req, res) => {
  fs.readdir("./uploads", (err, files) => {
    if (err) {
      return res.status(500).send("Unable to scan directory");
    }
    if (files.length === 0) {
      return res.send("No files uploaded.");
    }
    let fileList = "<h1>Uploaded Files:</h1><ul>";
    files.forEach((file) => {
      fileList += `<li><a href="/uploads/${file}">${file}</a></li>`;
    });
    fileList += "</ul>";
    res.send(fileList);
  });
});

// Endpoint to upload file
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully.");
});

// Serve static files from the 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//node server.js
