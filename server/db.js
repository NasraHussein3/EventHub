const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

// Create a connection pool
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Gift19Nod",
  database: "eventhub",
  waitForConnections: true,
  connectionLimit: 30,
  queueLimit: 0,
});

const getConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to the database!");
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
