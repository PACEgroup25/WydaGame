import { Client } from '$lib/data/buildClient.js';
import { BuildCohort } from '$lib/data/buildCohort.ts';
import type { EntityMetrics, EntityProfile } from '$lib/data/entity.ts';

export async function load({params}) {

    const client = new Client("Learning Coach");
    await client.declareClient();
    await client.assignCoachCohorts();
    let cohorts = client.clientHome.cohortID;
    const cohort = new BuildCohort(params.cohortId);
    const cohortData = await cohort.getCohort();
    const cohortLearners = await cohort.getLearners();
    const cohortLearnersMetrics = await cohort.getLatestLearnerMetrics();



    let onTrack = 0;
    let behind = 0;
    let totalReflectionQuality = 0;
    let onTrackUsers = "";
    let usersAtRisk = "";
    let averageReflectionQuality = "";

    let metricsMap = new Map();

    const learnerData: { profile: EntityProfile, metrics: EntityMetrics | undefined} [] = [];

    //to link metrics to a user we rely on the userid

    //make a map of metrics that are not undefined with user id as key
    for(var i = 0; i<cohortLearnersMetrics.length; i++){
        if(cohortLearnersMetrics[i]){
            metricsMap.set(cohortLearnersMetrics[i]?.id,cohortLearnersMetrics[i])
            //if status = 1 then they are on track
            cohortLearnersMetrics[i]?.userStatus == 1 ? onTrack++ : behind ++;
            totalReflectionQuality += cohortLearnersMetrics[i]?.reflectionQuality || 0;
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

    let tableData: {
        id: string;
        name: string;
        status: number;
        challenge: string;
        reflectionQuality: number;
        date: string;
    } [] = [];

    for(var i = 0; i<learnerData.length; i++){
        const curr = learnerData[i];
        tableData.push({
            id:curr.profile.id,
            name:curr.profile.firstName + " " + curr.profile.lastName,
            status: curr.metrics?.userStatus || 1,
            challenge: curr.metrics?.challenge || "",
            reflectionQuality: curr.metrics?.reflectionQuality || 1,
            date: curr.metrics?.lastUpdated?.toDateString() || "",
        })
    }


    onTrackUsers = Math.ceil((onTrack/tableData.length)*100) + "%";
    usersAtRisk = Math.floor((behind/tableData.length)*100) + "%";
    averageReflectionQuality = (totalReflectionQuality/tableData.length).toFixed(2).toString();

    return {
        //values for snippets
        cohortName: cohortData.cohortName,
        org: cohortData.organisationName,
        cohortId: params.cohortId,
        percentageOnTrackUsers: onTrackUsers,
        usersOnTrack: onTrack,
        percentageUsersAtRisk: usersAtRisk,
        usersAtRisk: behind,
        averageReflectionQuality: averageReflectionQuality,
        cohortIds: cohorts,
        //table payload
        value: tableData
    };
    
};