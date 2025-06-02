export interface Entity { //end-user
    id: string //PartitionKey in Users TABLE
};

export interface UserLinkedEntity extends Entity{ //user within database
    entityID: string //RowKey
};

export interface EntityProfile extends Entity, UserLinkedEntity{
    firstName: string | null,
    lastName: string | null,
    createdAt: Date | null,
    updatedAt: Date | null
};

export interface EntityHome extends Entity, EntityProfile{
    cohortID: string | string[] | null,
    organisationID: string | null,
};

export interface EntityRole extends Entity, EntityProfile{
    role : string
};

export interface Cohort{
    cohortID: string,
    cohortName: string,
    organisationID: string,
    organisationName: string
};