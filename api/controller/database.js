import mysql from 'mysql2/promise';

import dotenv from 'dotenv'
dotenv.config()

// let pool;
// try{
    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
    // pool = pool;

// }catch(err){
    // console.log("Error in database.js: ",err)
// }

// pool.connect(function(err) {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//     } else {
//       console.log('Connected to MySQL');
//     }
// });
export default pool;