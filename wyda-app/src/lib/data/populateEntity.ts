import sql from 'mssql'; //azure databse -> SQL not mySql
import {type EntityProfile, type EntityRole, type EntityHome, type Cohort} from "./entity.ts";
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
            .query(`SELECT * FROM UsersProfiles WHERE RowKey = @userId`);

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

    async buildcohort(cohortID: string): Promise<string[]>{
        console.log("finding cohort members");
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
        console.log("linkning coach to cohorts");
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
            console.log("home profile made");
            return updatedProfile;

        }catch (error){
            console.log('Database query failed: ', error);
            return Promise.reject("Invalid state error")
        }
    }
    
    async defineCohort(cohortID:string): Promise<Cohort>{
        console.log("defining Cohort");
        try{
            const pool = await this.poolPromise;

            const result = await pool.request()
            .input('cohortID', sql.VarChar, cohortID)
            .query(`SELECT * FROM Cohorts WHERE RowKey = @cohortID`);

            const rows = result.recordset;

            const row = rows[0] as any;

            const cohort: Cohort = {
                cohortID: row.RowKey,
                cohortName: row.cohort_name,
                organisationID: row.organisation_id,
                organisationName: ''
            }
            return cohort;            
        }
        catch (error){
            console.log('Database query failed: ', error);
            return Promise.reject("Invalid state error")
        }
    }

    async getOrgName(organisationID: string): Promise<string>{
        console.log("getting organisation name")
        try{
            const pool = await this.poolPromise;

            const result = await pool.request()
            .input('orgID', sql.VarChar, organisationID)
            .query(`SELECT * FROM Organisations WHERE PartitionKey = @orgID`) //sanatise
            
            const rows = result.recordset;

        if (!rows || rows.length === 0) {
            throw new Error(`No organisation found with ID ${organisationID}`);
        }

        const row = rows[0];
        return row.organisation_name;

        }catch (error){
            console.log('Database query failed: ', error);
            return Promise.reject("Invalid state error")
        }
    }
}