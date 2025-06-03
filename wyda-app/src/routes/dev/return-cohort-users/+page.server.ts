import {Client} from "$lib/data/buildClient.ts";
import { BuildCohort } from "$lib/data/buildCohort";
import { type Cohort } from "$lib/data/entity";

export async function load(){
    const client = new Client("Learning Coach");
    await client.declareClient();
    await client.assignCoachCohorts();
    const result = await client.getFullClientProfile();
    const cohorts = result.cohortID;

    let cohortData : Cohort[] = [];

    if(Array.isArray(cohorts)){
        cohortData = await client.getCohortsArray(cohorts);
    }
    let payload: {cohortId: string, cohortName: string}[] = [];

    if(Array.isArray(cohorts)){
        for(var i = 0; i<cohorts.length; i++){
            payload.push({cohortId: cohorts[i], cohortName: cohortData[i].cohortName});
        }
    }
    return {value: payload};
}

//for learner page, iterate over all cohorts and get user information,
//display all user information in one area.