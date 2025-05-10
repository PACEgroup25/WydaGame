export interface Entity {
    id: String //partition key in user-permission
}

export interface UpdatedAtEntity extends Entity {
    createdAt: Date //Created_at
    updatedAt?: Date | null | undefined //not available in current datasets from my understanding
}

export interface UserLinkedEntity extends Entity {
    userID: String //row key in user-permission
}