import type {EntityProfile, EntityHome, Cohort } from "$lib/data/entity";
import { PopulateEntity } from './populateEntity'

export class BuildCohort{
    id: string;
    role:string;
    populate = new PopulateEntity()

    constructor(userId:string, userRole: string){
        this.id = userId;
        this.role = userRole;
    }

    async clientCohorts():Promise<EntityHome>{ //populates EntityHome to access cohort and organisation id's
        const profile: EntityHome = await this.populate.populateHome(this.id, this.role);
        return profile;
    }

    async cohorts(c:string | string[]):Promise<Cohort | Cohort[]>{ //populates Cohort entity, to gain the names of the cohort(s) and organisation client is apart of

        if(Array.isArray(c)){
            const cohortsArray: Cohort[] = await Promise.all(
                c.map(co => this.populate.getCohortInfo(co))
            );
            return cohortsArray
        };

        const info = await this.populate.getCohortInfo(c);
        return info;
    }

    async learners(c: string | string[]){ //populates EntityProfile interface for all learners within a cohort
        if(Array.isArray(c)){
            const learnersArray: EntityProfile[][] = await Promise.all(
                c.map(co => this.populate.getLearners(co))
            )
            return learnersArray;
        }

        const learners: EntityProfile[] = await this.populate.getLearners(c);
        return learners;
    }
}