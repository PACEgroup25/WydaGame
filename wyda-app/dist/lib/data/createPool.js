import * as mysql from 'mysql2/promise';
//returns pool for easy use with rest of program
let pool;
export async function getPool() {
    if (!pool) {
        const pool = mysql.createPool({
            host: "pc25-db.mysql.database.azure.com",
            user: "user1",
            password: "&)*(Oklmno",
            database: "testdb",
            port: 3306,
            ssl: { rejectUnauthorized: false }
        });
    }
    return pool;
}
// use:
// import {createpool} from ./createPool
// const pool = await createPool()
// const [rows] = await pool.query('SHOW TABLES');
//# sourceMappingURL=createPool.js.map