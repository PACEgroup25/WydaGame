import {
    type Entity,
    type UpdatedAtEntity,
    type UserLinkedEntity
} from "$lib/entities/entity" //seems to be another file generated from the login/ auth. process - hidden

// partition key: user id
// row key: id
// prettier-ignore
export interface UserPermissionEntity extends Entity, UserLinkedEntity, UpdatedAtEntity {
    key: UserPermissionKey
    value: boolean
}

export enum UserPermissionKey {
    Cohort = "cohort",
    Flow = "flow",
    Explore = "explore"
}
