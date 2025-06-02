// build profile will go in here to populate learner information

import { BuildUser } from '$lib/data/buildProfile';

export async function load({params}){
    //init new buildUser for connection and methods
    //pass in learner id to return learner information
    let user = null;
    try {
        user = new BuildUser(params.learnerID);
        user.buildClient();
        const info = await user.getClientProfile();
        return info;
    } catch (error) {
        console.log(error);
    }
}