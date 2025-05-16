import {
    type Entity,
    type UpdatedAtEntity,
    type UserLinkedEntity
} from "./entity"

export interface UserCohort extends Entity, UserLinkedEntity, UpdatedAtEntity {
    cohortId: string | string[];
}