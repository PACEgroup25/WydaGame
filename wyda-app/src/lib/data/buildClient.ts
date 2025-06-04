//import CollapsibleContent from "bits-ui/dist/bits/collapsible/components/collapsible-content.svelte";
import {type Entity,type EntityProfile, type EntityHome, type Cohort} from "./entity.ts";
import { populateEntity } from "./populateEntity.ts";
import { BuildCohort } from "./buildCohort.ts";


export class Client{ 
    role: string;
    clientProfile: EntityProfile;
    clientHome: EntityHome;
    
    populate = new populateEntity()

    constructor(clientRole:string){
        this.role = clientRole;
        this.clientProfile ={ id: '', entityID: '', firstName: null, lastName: null, createdAt: null, updatedAt: null, role: null, gender: null, education: null, learningSupport: null, country:null};
        this.clientHome ={...this.clientProfile, cohortID: null, organisationID: null};
    }

    async declareClient(): Promise<boolean>{ //assignes an id to the end-user
    
        if(this.role == 'Learning Coach'){
            this.clientProfile.entityID = '4ca98e99-3328-4cb7-86b6-715c0be96358'; //PartitionKey
            if(await this.buildClient()){
                await this.assignCoachCohorts();
            }
        
        } else if (this.role == 'Learner'){
            this.clientProfile.entityID = 'fb18cdce-d9e3-42ff-84c6-b6961e840cbc'; //PartitionKey
            await this.buildClient();
            console.log(this.clientProfile)

        } else if (this.role == 'Client Admin'){
            this.clientProfile.entityID = '1d7f4057-be1c-427f-a3c4-99edec2ac38b'; //PartitionKey
            if(await this.buildClient()){
                await this. assignCohorts();
            }
        }
        return true
    }

    async buildClient(): Promise<boolean>{ //builds client Entity interface
        this.clientProfile = await this.populate.populateProfile(this.clientProfile.entityID);
        return true         
    }

    async assignCoachCohorts(): Promise<boolean>{ //assigns the learning coach their cohorts and org info
        this.clientHome = {
            ...this.clientProfile,
            organisationID: await this.populate.getValue('PartitionKey', 'UsersOrganisations', 'RowKey', this.clientProfile.entityID),
            cohortID: await this.populate.coachLinkedCohorts(this.clientProfile.entityID)
        }
        
        console.log("coach cohorts assigned")
        return true
    }

    async assignCohorts(): Promise<boolean>{ // assigns the clients admin their cohort and org info

        this.clientHome = await this.populate.populateHome(this.clientProfile, this.clientProfile.entityID);
        console.log("cohort assigned");
        return true
    }

    async getClientProfile(): Promise<EntityProfile>{ //returns client EntityProfile interface
        return this.clientProfile
    }

    async getFullClientProfile(): Promise<EntityHome>{ //returns client EntityHome interface (do not call for learners)
        return this.clientHome
    }

    async getCohortsArray(cohortIDs: string[]): Promise<Cohort[]>{

        const ids = cohortIDs;

        const cohortsArray: Cohort[] = await Promise.all(
            ids.map(id => {
                const build = new BuildCohort(id);
                return build.getCohort();
            })
        );
        return cohortsArray;
    }

}

async function test(role: string){
    console.log(role, "test")
    const learner = new Client(role);
    if(await learner.declareClient()){
        console.log("client made")    
        const profile: EntityHome = await learner.getFullClientProfile()
        console.log("client:", profile);
    }
    
}


// RUN WITH: npx ts-node --esm -r tsconfig-paths/register src/lib/data/buildClient.ts

// test('Learner')
//test('Client Admin')
//test('Learning Coach')