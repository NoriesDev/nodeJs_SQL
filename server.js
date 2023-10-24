
const express = require('express');
const server = express();
const port = 3000;
const pool = require('./db/pgClient');
require('dotenv').config();
const {
    getAllUsers
    } = require('./controllers/userControllers');

server.use(express.json());



server.get('/', (req, res) => {
  res.send('Hello World!')
})


server
.route('/users')
.get(getAllUsers);



server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})