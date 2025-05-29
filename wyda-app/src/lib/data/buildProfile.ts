import {type Entity,type EntityProfile, type EntityHome} from "./entity.ts";
import { populateEntity } from "./populateEntity.ts";

export class BuildUser{
    userID: string;
    userProfile: EntityProfile;
    userHome: EntityHome;

    populate = new populateEntity();

    constructor(user:string){
        this.userID = user;
        this.userProfile ={ id: '', entityID: this.userID, firstName: null, lastName: null, createdAt: null, updatedAt: null};
        this.userHome ={...this.userProfile, cohortID: null, organisationID: null};
    }

    async buildClient(): Promise<boolean>{ //builds client Entity interface
    this.userProfile = await this.populate.populateProfile(this.userProfile.entityID);
    return true         
    }

    // async assignHome(): Promise<boolean>{

    //     this.userHome = await this.populate.populateHome(this.userProfile, this.userProfile.entityID);
    //     console.log("cohort assigned");
    //     return true;
    // }



    async getClientProfile(): Promise<EntityProfile>{ //returns client EntityHome interface (do not call for learners)
        if(await this.buildClient()){
            return this.userProfile;
        }
        return Promise.reject("Invalid state error")
    }
}

//npx ts-node --esm -r tsconfig-paths/register src/lib/data/buildProfile.ts

async function test(id:string){
    const newUser = new BuildUser(id);
    const user: EntityProfile = await newUser.getClientProfile();
    console.log("profile built:", user);
}

test('870f99b2-46ec-4e4e-ae33-0fce97d85e1e');