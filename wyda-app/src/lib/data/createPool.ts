import sql from 'mssql'; //azure databse -> SQL not mySql


//returns pool for easy use with rest of program
//let pool: sqlConfig | undefined;

let pool: Promise<sql.ConnectionPool> | null = null;

export async function getPool(){
    if (!pool){
        console.log("creating pool");

        pool = sql.connect({
            server: "pace-test.database.windows.net",
            user: "pacetest",
            password: "p(6-Lp91j%",
            database: "paceTest",
            port: 1433,
            options:{
                encrypt: true,
                trustServerCertificate: false
            },
            pool:{
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000,
            }

        });
    }
    if(!pool){
        console.log("failed connection")
    }
    console.log("db found");
    return pool;
}


//npx ts-node --esm -r tsconfig-paths/register src/lib/data/createPool.ts


// use:
// import {createpool} from ./createPool
// const pool = await createPool()
// const [rows] = await pool.query('SHOW TABLES');

 //Noah's db:
        // pool = mysql.createPool({
        //     host: "pc25-db.mysql.database.azure.com",
        //     user: "user1",
        //     password: "&)*(Oklmno",
        //     database: "testdb",
        //     port: 3306,
        //     ssl: {rejectUnauthorized: false},
        //     waitForConnections: true,
        //     connectionLimit: 10,
        //     queueLimit: 0
        // });