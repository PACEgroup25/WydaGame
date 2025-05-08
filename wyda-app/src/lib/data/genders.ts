import { Gender } from "$lib/entities/user-profile.entity"

export default [
    { 
        id: "female", 
        label: Gender.Female, 
        value: Gender.Female },
    { 
        id: "male", 
        label: Gender.Male, 
        value: Gender.Male },
    { 
        id: "non_binary", 
        label: Gender.NonBinary, 
        value: Gender.NonBinary },
    { 
        id: "prefer_not_to_say", 
        label: Gender.PreferNotToSay, 
        value: Gender.PreferNotToSay },
    { 
        id: "other", 
        label: Gender.Other, 
        value: Gender.Other
    }
]
