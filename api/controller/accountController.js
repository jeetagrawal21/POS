// import mysql from 'mysql2';
import pool from './database.js'
// import dotenv from 'dotenv'
// dotenv.config()

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

    return result;
    // return {
    //     id: result.insertId,
    //     username,
    //     password
    // }
}

export async function authUser(username, password) {
    
    const [rows] = await pool.query(`
    SELECT * 
    FROM accounts 
    WHERE username = ? AND password = ?`, [username,password])
    return rows
}

