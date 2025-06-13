import { type Handle, error } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const handle: Handle = async({ event, resolve }) =>{
    const session = event.cookies.get('session_id'); //cookie holds both JWT token and role of user

    if(!session){ //should only happen on initialisation - gets solved by other functions
        return resolve(event)
    }

    const JWT_SECRET = '8db3cfb9a28afa7c61c8d5bf3428a5b10b38a152f908f67216fb04fe8325a5d5' //save this elsewhere PLEASE!
    
    try{
        const parsed = JSON.parse(session)
        try{
            const data = jwt.verify(parsed.token, JWT_SECRET) as { role: string, id: string; first: string; last: string }; //is the current session_token valid?
            event.locals.user = {
                role: data.role,
                firstName: data.first,
                lastName: data.last
            }
        }catch{ 
             throw error(404, 'verification failure'); //change: make new session_token
        }
    }catch{
        throw error(404, 'parse failure' ); 
    }
    return resolve(event)
}

//recommendation: check CSRF token when implemented