const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',         // change to your MySQL username
  password: 'root1234',         // change to your MySQL password
  database: 'feedxchange', // change to your database name
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool.promise();
