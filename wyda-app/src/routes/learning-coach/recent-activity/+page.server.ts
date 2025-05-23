import { recentActivityData } from "./recentActivityData.js";

export function load (){
    const processedValues = {
        recentActivity : recentActivityData
    }
    return {
        value: processedValues
    };
};
