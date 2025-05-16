import * as mysql from 'mysql2/promise';

async function populateEntity(){
    const pool = mysql.createPool({
    host: "pc25-db.mysql.database.azure.com",
    user: "user1",
    password: "&)*(Oklmno",
    database: "testdb",
    port: 3306,
    ssl: {
        rejectUnauthorized: false
    }
    });

    try {
        const [rows] = await pool.query('SELECT * FROM users');
        console.log('Databases:', rows);
    } catch (error) {
        console.error('Error querying databases:', error);
    } finally {
        await pool.end();
    }
}

populateEntity()

//call db, specifing individual entity
//populate entity with information fetched from db
