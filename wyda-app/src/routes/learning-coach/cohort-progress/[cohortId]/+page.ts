import data from "./data.js";

export function load({params}) {
    let onTrack = 0;
    let behind = 0;
    let totalReflectionQuality = 0;
    let onTrackUsers = "";
    let usersAtRisk = "";
    let averageReflectionQuality = "";

    let userData: {
        id: number;
        name: string;
        email: string;
        status: string;
        reflectionQuality: number;
        org: string;
        cohortid: number;
        date: string;
    } [] = data[Number(params.cohortId)-1];
    for(var i = 0; i<userData.length; i++){
        if(userData[i].status == "On track"){
            onTrack++;
        } else {
            behind++;
        }
        totalReflectionQuality+=userData[i].reflectionQuality;
    }
    onTrackUsers = Math.ceil((onTrack/userData.length)*100) + "%";
    usersAtRisk = Math.floor((behind/userData.length)*100) + "%";
    averageReflectionQuality = (totalReflectionQuality/userData.length).toFixed(2).toString();
    return {
        cohortId: params.cohortId,
        onTrackUsers: onTrackUsers,
        usersAtRisk: usersAtRisk,
        averageReflectionQuality: averageReflectionQuality,
        value: userData
    };
    
};