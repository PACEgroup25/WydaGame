import {Client} from "$lib/data/buildClient.ts";

export async function load(){
    const client = new Client("Learning Coach");
    await client.declareClient();
    await client.assignCoachCohorts();
    const result = await client.getFullClientProfile();
    console.log(result);
    return {data: result};
}

//for learner page, iterate over all cohorts and get user information,
//display all user information in one area.