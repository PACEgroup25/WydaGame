import { recentActivityData } from "./recentActivityData.js";

export function load (){


    let onTrackUsers = 0;
    let usersAtRisk = 0;
    let totalReflectionQuality = 0;


    for(var i = 0; i<recentActivityData.length; i++){
        if(recentActivityData[i].status == "On track"){
            onTrackUsers++;
        } else {
            usersAtRisk++;
        }
        totalReflectionQuality+=recentActivityData[i].reflectionQuality;
    }

    return {
        onTrackUsers: Math.ceil((onTrackUsers/recentActivityData.length)*100) + "%",
        usersAtRisk: Math.floor((usersAtRisk/recentActivityData.length)*100) + "%",
        averageReflectionQuality:(totalReflectionQuality/recentActivityData.length).toFixed(2).toString(),
        value: recentActivityData
    };
};
