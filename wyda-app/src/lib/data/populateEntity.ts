import sql from 'mssql'; //azure databse -> SQL not mySql
import {type EntityProfile, type EntityRole, type EntityHome} from "./entity.ts";
import { getPool } from "./createPool.ts";
import { isFileLoadingAllowed } from 'vite';

export class populateEntity{
    
    private poolPromise: Promise<sql.ConnectionPool>;

    constructor(){
        this.poolPromise = getPool();
    }

    async findEntity(newUser: string, column:string, table: string): Promise<Boolean>{  
        //checks if user user exists within table  

        try{
            const pool = await this.poolPromise;

            const result = await pool.request()
            .input('partKey', sql.VarChar, newUser) // or sql.Int or the actual data type
            .query(`SELECT * FROM ${table} WHERE ${column} = @partKey`);

            if (result.recordset.length > 0) {
                const user = result.recordset[0];
                console.log('User found:', user);
            } else{
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
        //populates EntityProfile interface

        try{
            const pool = await this.poolPromise;

            const result = await pool.request()
            .input('userId', sql.VarChar, newUser)
            .query('SELECT * FROM UsersProfiles WHERE PartitionKey = @userId');

            const rows = result.recordset;

            const row = rows[0] as any;

            const profile: EntityProfile ={
                id: newUser, //update when db updates
                entityID: row.id,
                firstName: row.first_name, //update when db updates
                lastName: row.last_name, //update when db updates
                createdAt: new Date (row.createdAt), //INVALLID DATE -> fix
                updatedAt: new Date (row.updatedAt) //INVALLID DATE -> fix
            }
            console.log("profile made");
            return profile;

        }catch (error){
            console.log('Database query failed: ', error);
            return Promise.reject("Invalid state error")
        }          
    }

    async getValue(column: string, table: string,  key: string, goal:string){
        //returns value from a table based on other contents of a column in a table
        //example uses: finding the role of a user
  
        try{
            const pool = await this.poolPromise;

            const result = await pool.request()
            .input('column', sql.VarChar, column)
            .input('table', sql.VarChar, table)
            .input('goalKey', sql.VarChar, key)
            .input('goal', sql.VarChar, goal)
            .query(`SELECT @column FROM @table WHERE @goalKey = @goal`) //sanatise
            
            const found = result.recordset[0]?.[column];

            if(found != null){
                return found;
            }else{
                throw new Error("Invalid state error")
            }
        }catch(err){
            console.log('query isFileLoadingAllowed:', err);
            throw new Error("Invalid state error")
        }
    }

    async buildcohort(cohortID: string){
        try{
            const pool = await this.poolPromise;
            
            const result = await pool.request()
            .input('cohort', sql.VarChar, cohortID)
            .query(`SELECT RowKey FROM UsersCohorts WHERE PartitionKey = @cohort`)

            const members: string[] = result.recordset.map(row => row.RowKey);
            return members;

        }catch(err){
            console.log('query isFileLoadingAllowed:', err);
            throw new Error("Invalid state error")
        }
    }

    async populateHome(profile: EntityProfile, user: string): Promise<EntityHome>{
        try{
            const pool = await this.poolPromise;
            console.log(user);

            const result = await pool.request()
            .input('id', sql.VarChar, user)
            .query('SELECT * FROM UsersCohorts WHERE RowKey = @id');

            const rows = result.recordset;

            const row = rows[0] as any;

            const updatedProfile: EntityHome ={
                ... profile,
                cohortID: row.cohort_id,
                organisationID: row.PartitionKey
            }
            console.log("profile made");
            return updatedProfile;

        }catch (error){
            console.log('Database query failed: ', error);
            return Promise.reject("Invalid state error")
        }
    }
}


//RUN WITH: npx ts-node --esm -r tsconfig-paths/register src/lib/data/populateEntity.ts




async function test(){
    
    const id = '0573a9b9-c9fc-4aa6-a340-17909a6c34d2'
    const table = 'Users'
    const column = 'PartitionKey'

    const pe = new populateEntity();
    const found = await pe.findEntity(id, column, table);

    if(found){
        console.log("user exists");
        const newProfile: EntityProfile = await pe.populateProfile(id);
        console.log(newProfile);

        console.log("next test");
        const accessRole = await pe.getValue('role', 'UsersRoles', 'RowKey', newProfile.entityID);
        if(accessRole != null){
            const updatedProfile: EntityRole = {
                ...newProfile,
                role: accessRole
            }
            console.log(updatedProfile);
                       
        }else{
            console.log("test failure");
        }
        
        console.log("next test");
        const finalEntity: EntityHome = await pe.populateHome(newProfile, newProfile.entityID);
        console.log(finalEntity);        

        console.log(await pe.buildcohort('1063eaf1-3e34-47c2-a16f-5072ec33bd79'));

    } else{
        console.log("test failure");
    }
    
    //await testPool.end();
}

test().catch(console.error);

// const pool = await getPool();
// const pe = new populateEntity();
// const db = await pe.checkDB();
// if(db){
//     await pool.end();
// }


//test().catch(console.error);


