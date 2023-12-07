import express from 'express';
import { getAccount, getAccounts, createAccount, authUser } from './controller/accountController.js';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3030;
import dotenv from 'dotenv'
dotenv.config()


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.json());

// User authentication and account creation
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

// Login call
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


// Product CRUD

app.get('/products', async (req, res) => {
    const products = await getProducts()
    res.send(products)
});

app.get('/product/:id', async (req, res) => {
    const product = await getProduct(req.params.id)
    res.send(product)
});

app.get('/productByName/:name', async (req, res) => {
    const product = await getProductByName(req.params.name)
    res.send(product)
}); 

// app.post('/products', async (req, res) => { 

    
// });


//Create database table
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

