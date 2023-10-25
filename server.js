
const express = require('express');
const server = express();
const port = 3000;
const pool = require('./db/pgClient');

const {
    getAllUsers,
    getOneUser,
    addNewUser
    } = require('./controllers/userControllers');

server.use(express.json());



server.get('/', (req, res) => {
  res.send('Hello World!')
})


server
.route('/users')
.get(getAllUsers)
.post(addNewUser)

server.route('/users/:id').get(getOneUser)

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})