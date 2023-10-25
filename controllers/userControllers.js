const pool = require('../db/pgClient');

const getAllUsers = async (req, res) => {
    try {
      const { rows } = await pool.query(
        'SELECT * FROM users;'
      );
      res.json(rows);
      console.log(rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };

  const getOneUser = (req, res) => {
    const { id } = req.params;

    pool.query(`SELECT * FROM users WHERE id=$1`, [id])
    .then((singleUser) => res.json(singleUser.rows[0]))
    .catch((error) => res.status(404).json({error: error.message}))

  }

  const addNewUser = async (req, res) => {
    try {
      const { first_name, last_name, age } = req.body;
      if (!first_name || !last_name || !age) throw new Error('Missing data');
  
      const {
        rows: [user],
      } = await pool.query(
        'INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *',
        [first_name, last_name, age]
      );
  
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    getAllUsers,
    getOneUser,
    addNewUser
  };