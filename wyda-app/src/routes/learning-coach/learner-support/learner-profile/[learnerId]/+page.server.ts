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
        let populateInfo = new populateEntity();
        const email = await populateInfo.getValue('email','Users', 'RowKey', info.entityID);
        const gender = await populateInfo.getValue('gender','UsersProfiles','RowKey',info.entityID);
        const role = await populateInfo.getValue('role','UsersProfiles','RowKey',info.entityID);
        const education = await populateInfo.getValue('education','UsersProfiles','RowKey', info.entityID);
        const learningSupport = await populateInfo.getValue('learning_support', 'UsersProfiles', 'RowKey', info.entityID);
        const createdAt = await populateInfo.getValue('created_at','UsersProfiles','RowKey',info.entityID);
        return {info: info, email: email, gender: gender, role: role, education: education, learningSupport: learningSupport, createdAt: createdAt };
    } catch (error) {
        console.log(error);
        return {info: null, email: null};
    }
}