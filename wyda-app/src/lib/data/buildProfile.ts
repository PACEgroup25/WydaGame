import {type Entity, type UserLinkedEntity, type EntityProfile, type EntityRole, type EntityHome} from "./entity.ts";
import { populateEntity } from "./populateEntity.ts";


export class Client{ 
    role: string;
    clientEntity: Entity; // id (PartitionKey)
    clientProfile: EntityProfile; // id, entityID (RowKey), firstName, lastName, createdAt, updatedAt
    clientHome: EntityHome; // id, entityID (RowKey), firstName, lastName, createdAt, updatedAt, cohortID, organisationID

    populate = new populateEntity()

    constructor(clientRole:string){
        this.role = clientRole;
        this.clientEntity = {id: ''};
        this.clientProfile ={ ...this.clientEntity, entityID: '', firstName: null, lastName: null, createdAt: null, updatedAt: null};
        this.clientHome ={...this.clientProfile, cohortID: null, organisationID: null};
    }

    async delcareClient(){ //assignes an id to the end-user
    
        if(this.role == 'Learning Coach'){
            this.clientProfile.id = '481a35ed-f0aa-404e-9edb-fdc4a82fc5a0'; //PartitionKey
            if(await this.buildClient()){
                this.assignCoachCohorts();
            }
        
        } else if (this.role == 'Learner'){
            this.clientProfile.id = '0573a9b9-c9fc-4aa6-a340-17909a6c34d2'; //PartitionKey
            this.buildClient();

        } else if (this.role == 'Client Admin'){
            this.clientProfile.id = '9caf0959-d5c8-4590-ab6e-0b60c8475fc6'; //PartitionKey
            if(await this.buildClient()){
                this. assignCohorts();
            }
        }  
    }

    async buildClient(): Promise<boolean>{ //builds client Entity interface
        this.clientProfile = await this.populate.populateProfile(this.clientEntity.id);  
        return true         
    }

    async assignCoachCohorts(){ //assigns the learning coach their cohorts and org info
        this.clientHome.organisationID = await this.populate.getValue('PartitionKey', 'UsersOrganisations', 'RowKey', this.clientProfile.entityID);
        this.clientHome.cohortID = await this.populate.coachLinkedCohorts(this.clientProfile.entityID);
    }

    async assignCohorts(){ // assigns the clients admin their cohort and org info
        this.clientHome = await this.populate.populateHome(this.clientProfile, this.clientProfile.entityID);
    }

    async getClientProfile(): Promise<EntityProfile>{ //returns client EntityProfile interface
        return this.clientProfile
    }

    async getFullClientProfile(): Promise<EntityHome>{ //returns client EntityHome interface (do not call for learners)
        return this.clientHome
    }
}
