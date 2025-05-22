import * as mysql from 'mysql2/promise'

//returns pool for easy use with rest of program
let pool: mysql.Pool | undefined;

export async function getPool(){
    if (!pool){
        console.log("creating pool");
        pool = mysql.createPool({
            host: "pc25-db.mysql.database.azure.com",
            user: "user1",
            password: "&)*(Oklmno",
            database: "testdb",
            port: 3306,
            ssl: {rejectUnauthorized: false},
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }
    if(!pool){
        console.log("failed pool")
    }
    console.log("pool found");
    return pool;
}


// use:
// import {createpool} from ./createPool
// const pool = await createPool()
// const [rows] = await pool.query('SHOW TABLES');