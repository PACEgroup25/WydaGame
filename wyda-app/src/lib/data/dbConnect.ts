import mysql, { PoolOptions } from 'mysql2';

const access: PoolOptions = {
    host: "pc25-db.mysql.database.azure.com",
    user: "user1",
    password: "&)*(Oklmno",
    database: "testdb",
    port: 3306
};

const conn = mysql.createPool(access);


//call db, specifing individual entity
//populate entity with information fetched from db
