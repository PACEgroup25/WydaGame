import {type EntityProfile, type Cohort} from "./entity.ts";
import { populateEntity } from "./populateEntity.ts";
import { BuildUser } from "./buildProfile.ts";

export class BuildCohort{ //2D array of EntityProfile //Cohort
    cohort: string;

    populate = new populateEntity()

    constructor(cohortID:string){
        this.cohort = cohortID;
    }

    async getCohort():Promise<Cohort>{
        const newCohort: Cohort =  await this.populate.defineCohort(this.cohort);

        newCohort.organisationName = await this.populate.getOrgName(newCohort.organisationID);
        
        return newCohort;
    }

    async getLearners():Promise<EntityProfile[]>{
    
    const ids = await this.populate.buildcohort(this.cohort);
    
    const learners: EntityProfile[] = await Promise.all(
        ids.map(id => {
            const newUser = new BuildUser(id);
            return newUser.getClientProfile(); // returns Promise<EntityProfile>
        })
    );
    return learners;
    } 
}

async function getCohortsArray(cohortIDs: string[]): Promise<Cohort[]>{

    const ids = cohortIDs;

    const cohortsArray: Cohort[] = await Promise.all(
        ids.map(id => {
            const build = new BuildCohort(id);
            return build.getCohort();
        })
    );
    return cohortsArray;
}


//npx ts-node --esm -r tsconfig-paths/register src/lib/data/buildCohort.ts

async function test(){
    const testing = new BuildCohort('1063eaf1-3e34-47c2-a16f-5072ec33bd79');
    const testCohort = await testing.getCohort()
    console.log("cohort info:", testCohort);

    const members: EntityProfile[] = await testing.getLearners();
    console.log("cohort members:", members);

    const coachCohorts = ['1063eaf1-3e34-47c2-a16f-5072ec33bd79','45019222-cbe1-4435-8122-060f9ae1db9c']
    const coachCohortInfo: Cohort[] = await getCohortsArray(coachCohorts);
    console.log("cohorts:", coachCohortInfo);
}


//test();