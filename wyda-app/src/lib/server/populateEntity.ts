import mysql from 'mysql2/promise'
import { getPool } from './connect';
import {type EntityProfile } from "$lib/data/entity";


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
}