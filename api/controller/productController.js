import pool from './database.js'

export async function getProducts() {
    const [rows] = await pool.query("SELECT * FROM products")
    return rows
}

export async function getProduct(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM products 
    WHERE id = ?`, [id])
    return rows
}

export async function getProductByName(name) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM products 
    WHERE name = ?`, [name])
    return rows
}

// export async function createProduct(name, description, quantity, price) {
//     const [result] = await pool.query(`
//     INSERT INTO accounts (name, description, quantity, price)
//     VALUES (?, ?, ?, ?)`, [name, description, quantity, price])
//     return {
//         id: result.insertId,
//         name,
//         quantity,
//     }
// }