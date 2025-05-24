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
            .query('SELECT * FROM UsersProfiles WHERE RowKey = @userId');

            const rows = result.recordset;

            const row = rows[0] as any;

            const profile: EntityProfile ={
                id: newUser, 
                entityID: row.id,
                firstName: row.first_name,
                lastName: row.last_name, 
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

    async getValue(targetColumn: string, table: string,  referenceColumn: string, key:string){
        //returns value from a table based on other contents of a column in a table
        //example uses: finding the role of a user
  
        try{
            const pool = await this.poolPromise;

            const result = await pool.request()
            .input('key', sql.VarChar, key)
            .query(`SELECT ${targetColumn} FROM ${table} WHERE ${referenceColumn} = @key`) //sanatise
            
            const found = result.recordset[0]?.[targetColumn];

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

    async coachLinkedCohorts(user: string): Promise<string[]>{
        try{
            const pool = await this.poolPromise;

            const result = await pool.request()
                .input('user', sql.VarChar, user)
                .query(`SELECT RowKey FROM CoachAssignedCohorts WHERE PartitionKey = @user`)

            const cohorts: string[] = result.recordset.map(row => row.RowKey);
            return cohorts;

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
    
    const id = 'fb18cdce-d9e3-42ff-84c6-b6961e840cbc' //RowKey
    const table = 'Users'
    const column = 'RowKey'

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
        
        console.log("test: fetching EntityHome info");
        const finalEntity: EntityHome = await pe.populateHome(newProfile, newProfile.entityID);
        console.log(finalEntity);  
        
        console.log("test: grouping users by cohort")
        console.log(await pe.buildcohort('1063eaf1-3e34-47c2-a16f-5072ec33bd79'));

        console.log("test: getting cohorts linked to coach");
        console.log(await pe.coachLinkedCohorts('4ca98e99-3328-4cb7-86b6-715c0be96358'));

    } else{
        console.log("test failure");
    }
    
    //await testPool.end();
}

//test().catch(console.error);

// const pool = await getPool();
// const pe = new populateEntity();
// const db = await pe.checkDB();
// if(db){
//     await pool.end();
// }


//test().catch(console.error);


