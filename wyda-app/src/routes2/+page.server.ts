import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
    if(!locals.user){
        try{
            const res = await fetch(`/api/get-session?role=${encodeURIComponent('Learning Coach')}`, {
				method: 'GET'
			});

            if (!res.ok) {
				console.error('Login failed');
				return;
			}

			const data = await res.json();
			console.log('Session started:', data);
        }catch(err){
            console.error('Error during login:', err);
        }
    }
    throw redirect (303, '/dashboard')
}