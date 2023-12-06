const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3030;

//My SQL connection
const connection = mysql.createConnection({ 

    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'posinventory'

});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
});

app.get('/createdb', (req, res) => {

    let sql = 'CREATE DATABASE posinventory';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });

});

// Close MySQL connection on server shutdown
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});



app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

