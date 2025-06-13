import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
    switch(locals){

        if(locals.user.role == 'Learner'){

        }
        else{

        }

        return{
            locals.user
        }
}