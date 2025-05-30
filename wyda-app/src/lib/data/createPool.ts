// import sql from 'mssql'; //azure databse -> SQL not mySql


// //returns pool for easy use with rest of program
// //let pool: sqlConfig | undefined;

// let pool: Promise<sql.ConnectionPool> | null = null;

// export async function getPool(){
//     if (!pool){
//         console.log("creating pool");

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
                idleTimeoutMillis: 300000,
            }

//         });
//     }
//     if(!pool){
//         console.log("failed connection")
//     }
//     console.log("db found");
//     return pool;
// }


//npx ts-node --esm -r tsconfig-paths/register src/lib/data/createPool.ts