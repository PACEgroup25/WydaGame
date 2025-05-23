export interface Entity { //end-user
    id: string //PartitionKey in Users TABLE
};

export interface UserLinkedEntity extends Entity{ //user within database
    entityID: string //RowKey
};

export interface EntityProfile extends Entity, UserLinkedEntity{
    firstName: string,
    lastName: string,
    createdAt: Date,
    updatedAt: Date
};

export interface EntityHome extends Entity, EntityProfile{
    cohortID?: string | string[],
    organisationID: string,
};

export interface EntityRole extends Entity, EntityProfile{
    role : string
};