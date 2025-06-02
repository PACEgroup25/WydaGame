//get all user information and display on page as a list or grid

//import something external functions from lib/data to get all user data

//pass user data to the page and render it there


import {Client} from "$lib/data/buildClient.ts";
import { BuildCohort } from "$lib/data/buildCohort";
import { type EntityProfile } from "$lib/data/entity";

export async function load(){
    const client = new Client("Learning Coach");
    await client.declareClient();
    await client.assignCoachCohorts();
    //entity home
    const result = await client.getFullClientProfile();
    //instead of return, iterate over cohortID and get users
    const cohorts = result.cohortID;
    let learners : EntityProfile[] = [];
    

    if(Array.isArray(cohorts)){
        let cohortLearners : EntityProfile[] = [];
        for(var i = 0; i<cohorts.length; i++){
            const cohort = new BuildCohort(cohorts[i]);
            cohortLearners = await cohort.getLearners()
            learners = learners.concat(cohortLearners);
        }
    }
    return {learners: learners};
}