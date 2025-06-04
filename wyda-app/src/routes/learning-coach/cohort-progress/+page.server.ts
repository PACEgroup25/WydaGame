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
    let payload: {cohortId: string, cohortName: string, cohortOrg: string, numStudents: number}[] = [];

    if(Array.isArray(cohorts)){
        cohortData = await client.getCohortsArray(cohorts);
        for(var i = 0; i<cohorts.length; i++){
            let build = await new BuildCohort(cohorts[i])
            let learners = await build.getLearners();
            payload.push({cohortId: cohorts[i], cohortName: cohortData[i].cohortName, cohortOrg: cohortData[i].organisationName, numStudents: learners.length});
        }
    }
    
    return {value: payload};
}

// import { recentActivityData } from "./recentActivityData.js";

// export function load (){


//     let onTrackUsers = 0;
//     let usersAtRisk = 0;
//     let totalReflectionQuality = 0;


//     for(var i = 0; i<recentActivityData.length; i++){
//         if(recentActivityData[i].status == "On track"){
//             onTrackUsers++;
//         } else {
//             usersAtRisk++;
//         }
//         totalReflectionQuality+=recentActivityData[i].reflectionQuality;
//     }

//     return {
//         onTrackUsers: Math.ceil((onTrackUsers/recentActivityData.length)*100) + "%",
//         usersAtRisk: Math.floor((usersAtRisk/recentActivityData.length)*100) + "%",
//         averageReflectionQuality:(totalReflectionQuality/recentActivityData.length).toFixed(2).toString(),
//         value: recentActivityData
//     };
// };
