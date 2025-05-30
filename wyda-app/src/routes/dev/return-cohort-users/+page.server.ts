import {Client} from "$lib/data/buildClient.ts";

export async function load(){
    const client = new Client("Learning Coach");
    await client.declareClient();
    await client.assignCoachCohorts();
    const result = await client.getFullClientProfile();
    return {data: result};
}