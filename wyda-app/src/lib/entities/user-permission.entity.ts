import {
    type Entity,
    type UpdatedAtEntity,
    type UserLinkedEntity
} from "./entity"

// partition key: user id
// row key: id
// prettier-ignore
export interface UserPermissionEntity extends Entity, UserLinkedEntity, UpdatedAtEntity {
    key: UserPermissionKey
    value: boolean
}

export enum UserPermissionKey {
    //original - not sure what they're used for...
    // Cohort = "cohort",
    // Flow = "flow",
    // Explore = "explore"

    learner = "learner",
    clientAdmin = "client admin",
    learningCoach = "learning coach"
}
