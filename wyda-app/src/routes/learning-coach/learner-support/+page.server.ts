import { Client } from "$lib/data/buildClient";
import { BuildCohort } from "$lib/data/buildCohort";
import type { EntityMetrics, EntityProfile } from "$lib/data/entity";

export async function load(){
    let client = await new Client("Learning Coach");
    await client.declareClient();
    let cohorts = client.clientHome.cohortID;
    let learners : {cohortId: string | null, cohortName: string | null, learners: EntityProfile[], metrics: EntityMetrics[]}[] = [];
    if(Array.isArray(cohorts)){
        for(var i = 0; i<cohorts.length; i++){
            let payload : {cohortId: string | null, cohortName: string | null, learners: EntityProfile[], metrics: EntityMetrics[]} = {cohortId: null, cohortName: null, learners: [], metrics: []};
            payload.cohortId = cohorts[i];
            let cohort = await new BuildCohort(cohorts[i]);
            payload.cohortName = (await cohort.getCohort()).cohortName
            payload.learners = await cohort.getLearners();
            payload.metrics = (await cohort.getLatestLearnerMetrics()) as EntityMetrics[];
            learners.push(payload);
        }
    }
    return {learners :learners};
}