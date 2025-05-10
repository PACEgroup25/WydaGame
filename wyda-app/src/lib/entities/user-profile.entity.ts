//appeares when you go into user settings on the website
// not neccisarily useful for the project but good to know what data can be fetched

import { type Entity, type UpdatedAtEntity, type UserLinkedEntity } from "./entity" //seems to be another file generated from the login/ auth. process - hidden

// partition key: user id
// row key: id
export interface UserProfileEntity extends Entity, UserLinkedEntity, UpdatedAtEntity {
    //will probably just use firstName and lastName assuming...
    firstName?: string | null | undefined
    lastName?: string | null | undefined
    country?: string | null | undefined
    gender?: Gender | null | undefined
    customGender?: string | null | undefined
    role?: string | null | undefined
    education?: string | null | undefined
    accessibility?: boolean | null | undefined
    learningSupport?: string | null | undefined
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    NonBinary = "Non-binary",
    PreferNotToSay = "Prefer not to say",
    Other = "Other",
}

export const genders = Object.values(Gender)