import {
    type Entity,
    type UpdatedAtEntity,
    type UserLinkedEntity
} from "./entity"

export interface userAccess extends Entity, UserLinkedEntity, UpdatedAtEntity {
    key: accessRole
    value: boolean
}

export enum accessRole {
    Learner = "learner",
    clientAdmin = "client admin",
    LearningCoach = "learning coach"
}