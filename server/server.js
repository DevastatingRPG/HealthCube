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
app.use(express.query())
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
  params = req.query
  const { id } = req.body
  switch (params.page) {
    case 'lb':
      query = "CALL LeaderBoard()";
      db = 1;
      break;
    case 'store':
      switch (params.func) {
        case 'list':
          query = `CALL UnownedSprites(${id})`;
          db = 1;
          break;
      }
      break;
    case 'forms':
      switch (params.func) {
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
  const params = req.query;
  const { id, sid, cost, content, file } = req.body;
  switch (params.page) {
    case 'store':
      switch (params.func) {
        case 'buy':
          query = `CALL UserBuyChest(${id}, ${sid}, ${cost})`
          db = 1
          break;
      }
      break;
    case 'forms':
      switch (params.func) {
        case 'save':
          const basePath = 'files/fforms/'         
          let folderName = file.split('.')[0];          
          if (!fs.existsSync(basePath+folderName))
            fs.mkdirSync(basePath+folderName)            
          fs.writeFileSync(basePath+folderName+'/'+id+'.txt', content)
          res.sendStatus(200)
          break;

      }
      break;
  }
  if (db) {
    query = `CALL UserBuyChest(${id}, ${sid}, ${data.cost})`
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
