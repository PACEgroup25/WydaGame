// build profile will go in here to populate learner information

import { BuildUser } from '$lib/data/buildProfile';
import { populateEntity } from '$lib/data/populateEntity.ts';

export async function load({params}){
    //init new buildUser for connection and methods
    //pass in learner id to return learner information
    const id = params.learnerId;

    let user = null;
    try {
        user = await new BuildUser(id);
        user.buildClient();
        const info = await user.getClientProfile();
        let populateEmail = new populateEntity();
        const email = await populateEmail.getValue('email','Users', 'RowKey', info.entityID);
        return {info: info, email: email};
    } catch (error) {
        console.log(error);
        return {info: null, email: null};
    }
}