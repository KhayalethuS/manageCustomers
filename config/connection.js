const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'den1.mysql6.gear.host',
  user: 'customers5',
  password: '',
  database: 'customers5'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Connected to the database!");
});

module.exports = connection;