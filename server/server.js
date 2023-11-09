// server.js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const connection = mysql.createConnection({
  host: process.env.SQL_SERVER,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE
})

conversion = {1: 12, 2: 32, 3: 5, 4: 123}

app.get('/query/count', (req, res) => {
  const query = "CALL UserCount;"
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error('Error executing query: ', err);
      return;
    }
    res.send(rows[0])
  });
})

app.get('/query/', (req, res) => {
  res.send("HHEL")
})

// app.use(express.static('files'));

// // Parse JSON requests
// app.use(bodyParser.json());

// // Set up multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // Create a file upload endpoint
// app.post('/upload', upload.single('file'), (req, res) => {
//   // Get the file from the request
//   const file = req.file;
//   // Send a response with some file information
//   res.json({
//     filename: file.filename,
//     originalname: file.originalname,
//     size: file.size,
//   });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
