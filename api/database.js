import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

// pool.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//     } else {
//       console.log('Connected to MySQL');
//     }
// });

export async function getAccounts() {
    const [rows] = await pool.query("SELECT * FROM accounts")
    return rows
}

export async function getAccount(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM accounts 
    WHERE id = ?`, [id])
    return rows
}   
export async function createAccount(username, password) {
    const [result] = await pool.query(`
    INSERT INTO accounts (username, password) 
    VALUES (?, ?)`, [username, password])
    return {
        id: result.insertId,
        username,
        password
    }
}