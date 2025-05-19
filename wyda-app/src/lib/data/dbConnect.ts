import { exists } from 'fs';
import * as mysql from 'mysql2/promise'

//import { type Entity } from '$lib/data/entity'

export class populateEntity{
    private poolPromise: Promise<mysql.Pool>;
    private entityID: String = '';

    constructor(){
        this.poolPromise = this.callDB();
    }
     
    async callDB(): Promise<mysql.Pool>{
        //connects to db
        const pool = mysql.createPool({
            host: "pc25-db.mysql.database.azure.com",
            user: "user1",
            password: "&)*(Oklmno",
            database: "testdb",
            port: 3306,
            ssl: {rejectUnauthorized: false}
        });
        return pool;
    }

    async findEntity(x: string): Promise<Boolean>{
        //checks if the entity exists in the db

        try{
            this.entityID = x;

            const pool = await this.poolPromise;

            const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [this.entityID]);

            if (Array.isArray(rows) && rows.length > 0) {
                const user = rows[0] as any;
                console.log('User found:', user);
                console.log('Database name:', user.database_name); // assuming this field exists
            } else {
                console.log(`No user found with ID ${this.entityID}`);
                return false;
            }
            //this.createEntity();
            return true;

        } catch (error){
            console.log('Database query failed: ', error);
            return false;
        }
    }

    // async createEntity(): Promise<Boolean>{
    //     try{
    //         const pool = await this.poolPromise;

    //         const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [this.entityID]);

    //     }catch(error){
    //         console.log('Database query failed: ', error);
    //         return false;
    //     }
    // }
    
}

// for testing only:

// plan:
// call populateEntity.findEntity() after declaring a new Entity with the id
// -> findEntity checks if it exists 
// -> call populateEntity.createEntity() to populate Entity
//     -> checks the role



async function test(){

    const newEntity: UserLinkedEntity = {
        id: 'unknown',
        userID:'ff321e1d-808e-43e7-bd0d-22ffad3b438a'//note to self  -> sanatise
    }
    console.log(newEntity);

    const pe = new populateEntity();
    const found = await pe.findEntity(newEntity.userID);

    if(found){
        console.log("test success");
    } else{
        console.log("test failure");
    }

}

test().catch(console.error);

//test Entity
export interface Entity {
    id: string //partition key
}

export interface UpdatedAtEntity extends Entity {
    createdAt: Date //Created_at
    updatedAt: Date | null | undefined //updated_at
}

export interface UserLinkedEntity extends Entity {
    userID: string //row key
}



