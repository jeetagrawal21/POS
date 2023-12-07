import express from 'express';
import { getAccount, getAccounts, createAccount, authUser } from './database.js';
import cors from 'cors';

// const express = require('express');
// const mysql = require('mysql2');
const app = express();
app.use(cors());
const port = 3030;
import dotenv from 'dotenv'
dotenv.config()


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.json());

app.get('/accounts', async (req, res) => {
    const accounts = await getAccounts()
    res.send(accounts)
});

app.get('/accounts/:id', async (req, res) => { 
    const account = await getAccount(req.params.id)
    res.send(account)
});

app.post('/accounts', async (req, res) => {
    const {username,password} = req.body
    const result = await createAccount(username,password)
    return result
});

app.post('/login', async (req, res) => {
    const {username,password} = req.body
    const result = await authUser(username,password)
    
    if (result.length > 0) {
        res.json("Login successful")
    }
    else {
        res.json("Login failed")
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

