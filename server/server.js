// server.js
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const cors = require('cors')
const app = express();

require('dotenv').config();
env = process.env;
const PORT = env.PORT || 5000;

app.use(cors());
app.use(express.query());
app.use(express.json());
app.use('/uforms', express.static('files/uforms'));
app.use('/fforms', express.static('files/fforms'));

const connection = mysql.createConnection({
  host: env.SQL_SERVER,
  user: env.SQL_USER,
  password: env.SQL_PASSWORD,
  database: env.SQL_DATABASE
});

app.get('/', (req, res) => {
  var query, db = 0;
  const { page, func, id } = req.query;
  switch (page) {
    case 'lb':
      query = "CALL LeaderBoard()";
      db = 1;
      break;
    case 'store':
      switch (func) {
        case 'list':
          query = `CALL UnownedSprites(\'${id}\')`;
          db = 1;
          break;
      }
      break;
    case 'forms':
      switch (func) {
        case 'list':
          let forms = [];
          const basePath = 'files/uforms';
          fs.readdirSync(basePath).forEach(file => {
            forms.push(file);
          });
          res.send(forms);
          break;
        case 'sprites':
          query = `CALL OwnedSprites(\'${id}\')`;
          db = 1;
          break;
      }
      break;
  }
  if (db) {
    connection.query(query, (err, rows, fields) => {
      if (err) {
        console.error('Error executing query: ', err);
        return;
      }
      res.send(rows[0]);
    });
  }

})

app.post('/', (req, res) => {
  var query, db = 0;
  const { page, func } = req.query;
  const { id, sid, cost, content, file } = req.body;
  switch (page) {
    case 'store':
      switch (func) {
        case 'buy':
          query = `CALL UserBuyChest(\'${id}\', ${sid}, ${cost})`;
          db = 1;
          break;
      }
      break;
    case 'forms':
      switch (func) {
        case 'save':
          const basePath = 'files/fforms/';
          let folderName = file.split('.')[0];
          if (!fs.existsSync(basePath + folderName));
            fs.mkdirSync(basePath + folderName);
          fs.writeFileSync(basePath + folderName + '/' + id + '.txt', content);
          res.sendStatus(200);
          break;

      }
      break;
  }
  if (db) {
    connection.query(query, (err, rows, fields) => {
      if (err) {
        console.error('Error executing query: ', err);
        return;
      }
      res.sendStatus(200);
    });
  }

})

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
