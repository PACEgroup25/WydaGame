import { BuildCohort } from '$lib/data/buildCohort.js';
import type { EntityMetrics, EntityProfile } from '$lib/data/entity.js';

export async function load({params}){
    const cohort = new BuildCohort(params.cohortID);
    const cohortData = await cohort.getCohort();
    const cohortLearners = await cohort.getLearners();
    const cohortLearnersMetrics = await cohort.getLatestLearnerMetrics();

    let metricsMap = new Map();

    const learnerData: { profile: EntityProfile, metrics: EntityMetrics | undefined} [] = [];

    //to link metrics to a user we rely on the userid

    //make a map of metrics that are not undefined with user id as key
    for(var i = 0; i<cohortLearnersMetrics.length; i++){
        if(cohortLearnersMetrics[i]){
            metricsMap.set(cohortLearnersMetrics[i]?.id,cohortLearnersMetrics[i])
        }
    }

    //iterate through users, if id is present inside map, push their respective metrics in learnerData
    //otherwise push profile and undefined
    for(var i = 0; i<cohortLearners.length; i++){
        if(metricsMap.get(cohortLearners[i].id)){
            learnerData.push({profile: cohortLearners[i],metrics: metricsMap.get(cohortLearners[i].id)})
        } else {
            learnerData.push({profile: cohortLearners[i],metrics: undefined})
        }
    }

    return {metaData: cohortData, learnerInfo: learnerData};
}