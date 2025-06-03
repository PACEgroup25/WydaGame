import { BuildCohort } from '$lib/data/buildCohort.js';

export async function load({params}){
    const cohort = new BuildCohort(params.cohortID);
    const cohortData = await cohort.getCohort();
    const cohortLearners = await cohort.getLearners();
    const cohortLearnersMetrics = await cohort.getLatestLearnerMetrics();

    return {metaData: cohortData, learners: cohortLearners, learnerMetrics: cohortLearnersMetrics}
}