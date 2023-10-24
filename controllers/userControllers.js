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


  module.exports = {
    getAllUsers,
  };