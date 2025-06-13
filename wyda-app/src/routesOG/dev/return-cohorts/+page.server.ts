import {populateEntity} from "$lib/data/populateEntity.ts";

export async function load(){
    const entity = new populateEntity();
    const result = await entity.getAllUsers();
    return result;
}