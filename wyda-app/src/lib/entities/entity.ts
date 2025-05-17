export interface Entity {
    id: String //partition key
}

export interface UpdatedAtEntity extends Entity {
    createdAt: Date //Created_at
    updatedAt: Date | null | undefined //updated_at
}

export interface UserLinkedEntity extends Entity {
    userID: String //row key
}


//possible addition: CohortLinkedEntity