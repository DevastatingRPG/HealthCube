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

connection.connect()

app.get('/query/count', (req, res) => {
  const query = "SELECT COUNT(DISTINCT UID) FROM users NATURAL JOIN ownership NATURAL JOIN sprites";
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query: ', err);
      return;
    }
    console.log('Query results: ', results);
    res.send(results);
  });
})

app.get('/query/', (req, res) => {

})

connection.query('SELECT COUNT(DISTINCT UID) FROM users NATURAL JOIN ownership NATURAL JOIN sprites', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()
app.use(express.static('files'));

// Parse JSON requests
app.use(bodyParser.json());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Create a file upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  // Get the file from the request
  const file = req.file;
  // Send a response with some file information
  res.json({
    filename: file.filename,
    originalname: file.originalname,
    size: file.size,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
