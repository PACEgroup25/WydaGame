// import { Client } from "$lib/data/buildClient"
// import { BookTemplate } from "lucide-svelte";
// import { BuildCohort } from "./buildCohort"
// import {type Entity,type EntityProfile, type EntityHome, type EntityMetrics} from "./entity.ts";

// //will hold client information to call stuff like name from

// export class HandleClient{
//     client: EntityHome;
//     members: EntityProfile[];

//     constructor(role:string){
//         this.client = this.getProfile(role);
//         this.members = this.getCohort(role);
        
//     } 
//     async getProfile(role:string):Promise<EntityHome>{
//         const build = new Client(role);
//         const temp: EntityHome = await build.getFullClientProfile();

//         return temp

//     }

//     async getCohort(role:string):Promise<EntityProfile[]>{

//         const buildCohort = new BuildCohort(this.client.cohortID)

//         temp: EntityProfile[] = await buildCohort.getLearners()
//     }
// }