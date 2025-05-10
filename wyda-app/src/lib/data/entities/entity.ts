export interface Entity {
    id: String //partition key in user-permission.entity
}

export interface UpdatedAtEntity extends Entity {
    createdAt: Date //Created_at
    updatedAt?: Date | null | undefined
}

export interface UserLinkedEntity extends Entity {
    userID: String //row key in user-permission.entity
}