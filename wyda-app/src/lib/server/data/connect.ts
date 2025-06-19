import mysql from 'mysql2/promise'

let pool: mysql.Pool;

export async function getPool(){

if(!pool){
    try{
        pool = mysql.createPool({
            host: 'hopper.proxy.rlwy.net',
            user: 'root',
            password: 'aDSjQXADRrrFGvTEtIyCvOpsWDBFmXDt',
            database: 'railway',
            port: 32500,
            waitForConnections: true,
            connectionLimit: 5,
            idleTimeout: 60000
        });
    }catch(error){
    console.log('error at getPool', error)
    }
}

return pool;    
    
}