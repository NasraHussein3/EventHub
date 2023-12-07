const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

// Create a connection pool
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "12345679",
  database: "eventhub",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const getConnection = async () => {
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    throw new Error(`Error getting connection: ${error.message}`);
  }
};

// Export the pool to be used in other parts of the eventhub project
module.exports = {
  pool,
  getConnection,
  router: router,
};
