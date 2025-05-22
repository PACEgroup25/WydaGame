export interface Entity { //end-user
    id: string //PartitionKey in Users TABLE
};

export interface UserLinkedEntity extends Entity{ //user within database
    entityID: string //RowKey / id in Users TABLE
};

export interface EntityProfile extends Entity, UserLinkedEntity{
    firstName: string,
    lastName: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
};

export interface EntityHome extends Entity, EntityProfile{
    cohortID: string | string[],
    cohortName: string | string[],
    organsationID: string,
    organisationName: string
};

export interface EntityRole extends Entity, EntityProfile{
    role : roleType
};

enum roleType{
    learner = "Learner",
    clientAdmin = "Client Admin",
    learningCoach = "Learning Coach"
};