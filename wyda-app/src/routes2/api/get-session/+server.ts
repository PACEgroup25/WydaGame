import type { RequestHandler } from './$types';
import { SessionHandler } from '$lib/server/data/session'
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, cookies }) => {
    let role = url.searchParams.get('role')
    let id!: string; //RowKey

    const handler = new SessionHandler()

    switch (role){
        case 'Learning Coach':
            id = '4ca98e99-3328-4cb7-86b6-715c0be96358';
            break;
        case 'Client Admin':
            id = '1d7f4057-be1c-427f-a3c4-99edec2ac38b';
            break;
        case 'Learner':
            id = 'fb18cdce-d9e3-42ff-84c6-b6961e840cbc';
            break;
        default:
            role = 'Learning Coach';
            id = '4ca98e99-3328-4cb7-86b6-715c0be96358';
    }

    const token = await handler.createSession(id, role)

    cookies.set('session_id', token,{ //JWT session_token
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 1 hour
        //SameSite: 'Strict' //prevents CSRF
        //add httpsOnly: true
    });

    return json({success: true, message: `Session created for ${role}`})

    //recommendations: add CSRF token to greater protect website against CSRF attacks
}