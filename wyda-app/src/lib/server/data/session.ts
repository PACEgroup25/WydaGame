import { getPool } from './connect';
import type { PoolConnection } from 'mysql2/promise'
import jwt from 'jsonwebtoken';
import type { EntityProfile } from '$lib/data/entity'
import { PopulateEntity } from './populateEntity'

export class SessionHandler{

    private connection!: PoolConnection;

    async connect(){ //makes a connection to the DB
        if(!this.connection){
            const pool =  await getPool();

        try{
            this.connection = await pool.getConnection()
        }catch(error){
            console.log('error at getPool', error)
        }
        }        
    }

    async createSession(user:string, role:string){ //creates a row within the session DB
        
        await this.connect();

        const now = new Date()
        const expiresAt = new Date(now.getTime() + 60 * 60 * 1000); //1 hour till expiration

        
        const token = await this.tokenGen(user, role)

        await this.connection.execute(
            'INSERT INTO session (token, id, expires_at, created_at) VALUES (?, ?, ?, ?)',
            [token, user, expiresAt, now]
        );
        return token; //returns the token for creating session_token cookie
    }

    async tokenGen(id:string, role:string){ //generates JWT token (wow! so secure of me)
        const JWT_SECRET = '8db3cfb9a28afa7c61c8d5bf3428a5b10b38a152f908f67216fb04fe8325a5d5' //save this elsewhere PLEASE!
        
        const populate = new PopulateEntity()
        const profile: EntityProfile = await populate.populateProfile(id)

        const first = profile.firstName;
        const last = profile.lastName;

        const payload = { role, id, first, last};

        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
        
        return token;
    }

    async deleteSession(token:string){ //deletes session row from table
        await this.connect()
        await this.connection.execute(
            'DELETE FROM session WHERE token = ?',
            [token]
        );   
    }
}