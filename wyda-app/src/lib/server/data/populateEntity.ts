import mysql from 'mysql2/promise'
import { getPool } from './connect';
import type { EntityProfile, EntityHome, Cohort } from "$lib/data/entity";


export class PopulateEntity{

    private connection!: mysql.PoolConnection;
    
    async connect(){
        if(!this.connection){
            const pool =  await getPool();

        try{
            this.connection = await pool.getConnection()
        }catch(error){
            console.log('error at getPool', error)
        }
        }        
    }

    async populateProfile(user_id:string):Promise<EntityProfile>{
        await this.connect()

        try{
            const [rows] = await this.connection.execute(
                'SELECT * FROM UsersProfiles WHERE RowKey = ?',
                [user_id]
            );

            let profile: EntityProfile;

            const row = (rows as any[])[0]

            profile = {
                id: user_id,
                entityID: row.id,
                firstName: row.first_name,
                lastName: row.last_name,
                createdAt: row.created_at ? new Date(row.created_at) : new Date(),
                updatedAt: row.updated_at ? new Date(row.updated_at) : new Date(),
                role: row.role,
                gender: row.gender,
                education: row.education,
                learningSupport: row.learning_support,
                country: row.country
            }

            return profile
        }catch(error){
            console.log("populateProfile error:", error);
            throw new Error("Invalid state error")
        }
    }

    async populateHome(id:string, role:string):Promise<EntityHome>{
        const temp: EntityProfile = await this.populateProfile(id);
        let table;

        if(role === 'Learning Coach'){
            table = 'CoachAssignedCohorts'
        }else{
            table = 'UsersCohorts'
        }

        try{
            let query = `SELECT cohort_id FROM ${table} WHERE RowKey = ?`;
            let [rows] = await this.connection.execute(query, [id]);

            let row = rows as any[];
            const cohorts = row.map(r => r.cohort_id); 
            
            try{
                let [rows] = await this.connection.execute(
                    'SELECT organisation_id FROM UsersOrganisations WHERE RowKey = ?',
                    [id]
                );
                let row = (rows as any[])[0]
                
                const profile: EntityHome = {
                    ...temp,
                    cohortID: cohorts,
                    organisationID: row.organisation_id
                }
                return profile

            }catch(error){
            console.log("error at populate home:", error);
            throw new Error("Invalid state error");
            }
        }catch(error){
            console.log("error at populate home:", error);
            throw new Error("Invalid state error");
        };
    }

    async getCohortInfo(cohort:string ):Promise<Cohort>{
        await this.connect()

        try{
            let [rows] = await this.connection.execute(
                'SELECT * FROM Cohorts WHERE RowKey = ?',
                [cohort]
            );
            const row = (rows as any[])[0]
            const name = row.cohort_name;
            const orgId = row.organisation_id;

            try{
                const [orgRows] = await this.connection.execute(
                'SELECT organisation_name FROM Organisations WHERE RowKey = ?',
                [orgId]
                );
                const orgRow = (orgRows as any[])[0];

                const info: Cohort ={
                    cohortID: cohort,
                    cohortName: name,
                    organisationID: orgId,
                    organisationName: orgRow.organisation_name
                }

                return info;
            }catch(error){
            console.log("error at getCohortInfo:", error);
            throw new Error("Invalid state error");
            }   
        }catch(error){
            console.log("error at getCohortInfo:", error);
            throw new Error("Invalid state error");
        };
    }

    async getLearners(cohort:string){
        await this.connect()

        try{
            const [rows] = await this.connection.execute(
                'SELECT * FROM Cohorts WHERE PartitionKey = ?',
                [cohort]
            );

            let row = rows as any[];
            const learners = row.map(r => r.RowKey);

            const learnersArray: EntityProfile[] = await Promise.all(
                learners.map( learner => this.populateProfile(learner))
            );

            return learnersArray

        }catch(error){
            console.log("error at getLearners:", error);
            throw new Error("Invalid state error");
        };
    }
}