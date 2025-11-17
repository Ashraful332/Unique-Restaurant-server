const express = require('express');
const cors = require('cors') ;
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const db  = require('./DB/mysql');
const port = 5000


app.use(express.json());
app.use(cors());
dotenv.config();


// database
console.log(`${process.env.MYSQLHOST},${process.env.MYSQLUSER},${process.env.MYSQLPASSWORD},${process.env.MYSQLDATABASE},${process.env.MYSQLPORT}`);


app.get('/', (req, res) => {
  res.send('The server is running! V.1')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
