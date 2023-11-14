// server.js
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
require('dotenv').config();
var cors = require('cors')

env = process.env
const app = express();
const PORT = env.PORT || 5000;
app.use(cors());
app.use(express.json())
app.use('/uforms', express.static('files/uforms'));
app.use('/fforms', express.static('files/fforms'));

const connection = mysql.createConnection({
  host: env.SQL_SERVER,
  user: env.SQL_USER,
  password: env.SQL_PASSWORD,
  database: env.SQL_DATABASE
})

app.get('/', (req, res) => {
  var query, db = 0;
  data = req.query
  id = data.id
  sid = data.sid
  switch (data.page) {
    case 'lb':
      query = "CALL LeaderBoard()";
      db = 1;
      break;
    case 'store':
      switch (data.func) {
        case 'list':
          query = `CALL UnownedSprites(${id})`;
          db = 1;
      }
    case 'forms':
      switch (data.func) {
        case 'list':
          let forms = []
          const basePath = 'files/uforms'
          fs.readdirSync(basePath).forEach(file => {
            forms.push(file)
          });
          res.send(forms)
          break;
      }
  }
  if (db) {
    connection.query(query, (err, rows, fields) => {
      if (err) {
        console.error('Error executing query: ', err);
        return;
      }
      res.send(rows[0])
    });
  }

})

app.post('/', (req, res) => {
  var query, db = 0;
  data = req.query;
  id = data.id; 
  switch (data.page) {
    case 'store':
      switch (data.func) {
        case 'buy':
          sid = data.sid;
          query = `CALL UserBuyChest(${id}, ${sid}, ${data.cost})`
          db = 1
          break;
      }
    case 'forms':
      switch (data.func) {
        case 'save':
          const basePath = 'files/fforms/'
          content = data.content;          
          file = data.file.split('.')[0];          
          if (!fs.existsSync(basePath+file)){
            fs.mkdirSync(basePath+file)
            
          }
          fs.writeFile(basePath+file+'/'+id+'.txt', content, error => {
            if (error)
              console.error(error)
          })
          res.send("Done")

      }
  }
  if (db) {
    query = `CALL UserBuyChest(${id}, ${sid}, ${data.cost})`
    console.log(query)
    connection.query(query, (err, rows, fields) => {
      if (err) {
        console.error('Error executing query: ', err);
        return;
      }
      res.send("Successful Purchase")
    });
  }

})



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
