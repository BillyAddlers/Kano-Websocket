require('dotenv').config()
const mysql = require('mysql2');
const connection = mysql.createConnection({
	debug: false,
  	host: 'localhost',
  	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: 'discord'
});

connection.connect(err => {
	if (err) {
		console.error('Error connecting to server Database: ' + err.stack);
		return;
	}
		console.log('MySQL 2 Full Database System Connection Succesfull. Connected as id ' + connection.threadId);
});

function getRows(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM points WHERE userID = '${id}'`, (err, rows) => {
            if(err) reject(err);
            resolve(rows[0])
        });
    });
}

module.exports = { connection, getRows };