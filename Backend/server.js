const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

app.get('/', (req, res) => {
  return res.json('from backend side')
})

app.get('/users', (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  })
})
app.listen(8081, () => {
  console.log('listening')
})