import * as mysql from 'mysql2/promise';
import { type UserLinkedEntity, type EntityProfile } from "./entity.ts";
import { getPool } from "./createPool.ts";

export class populateEntity{
    private poolPromise: Promise<mysql.Pool>;

    constructor(){
        this.poolPromise = getPool()
    }

    async findEntity(newUser: string, table: string): Promise<Boolean>{ //checks if the entity exists in the db        
        try{
            const pool = await this.poolPromise;
            if(pool == null){
                console.log("no pool");
                return false;
            }

            const sql = `SELECT * FROM \`${table}\` WHERE id = ?`; //change id to PartitianKey when db updates
            const [rows] = await pool.query(sql, [newUser]);

            if (Array.isArray(rows) && rows.length > 0) {
                const user = rows[0] as any;
                console.log('User found:', user);
            } else {
                console.log(`No user found with ID ${newUser}`);
                return false;
            }
            //this.createEntity();
            return true;

        } catch (error){
            console.log('Database query failed: ', error);
            return false;
        }
    }

    async populateProfile(newUser: string): Promise<EntityProfile>{
        try{
            console.log(newUser);
            const pool = await this.poolPromise;

            const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [newUser]);

            if (!Array.isArray(rows) || rows.length === 0){
                return Promise.reject("Invalid state error");
            };
            
            const row = rows[0] as any;

            const profile: EntityProfile ={
                id: 'unknown',//update when db updates
                entityID: row.id,
                firstName: '', //update when db updates
                lastName: '', //update when db updates
                email: row.email,
                createdAt: new Date (row.createdAt),
                updatedAt: new Date (row.updatedAt)
            }
            console.log("profile made");
            return profile;

        }catch (error){
            console.log('Database query failed: ', error);
            return Promise.reject("Invalid state error")
        }          
    }

    async defineRole(newUser: string) {
        try{
            const pool = await this.poolPromise;
            const [rows] = await pool.query('DESCRIBE userrole');
            console.log(rows);
        }catch (error){
            console.log('Database query failed: ', error);
        }
    }
}


//RUN WITH: npx ts-node --esm -r tsconfig-paths/register src/lib/data/populateEntity.ts




async function test(){
    const testEntity: UserLinkedEntity = {
        id: 'unknown',
        entityID: 'ff321e1d-808e-43e7-bd0d-22ffad3b438a'
    }

    const pool = await getPool();
    const table = 'users'

    console.log(testEntity);

    const pe = new populateEntity();
    const found = await pe.findEntity(testEntity.entityID, table);

    if(found){
        console.log("test success");
        
        console.log("next test");
        const newProfile: EntityProfile = await pe.populateProfile(testEntity.entityID);
        console.log(newProfile);
        console.log("test success");

        console.log("next test");
        pe.defineRole(newProfile.entityID);
        //pe.defineRole(newProfile.entityID);
        //await pool.end();

    } else{
        console.log("test failure");
    }
    
    //await pool.end();
}

test().catch(console.error);


