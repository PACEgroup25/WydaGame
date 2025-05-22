import { chartdata } from "./data.js";


export type ChartDataItem = {
    chartLabel: string;
    labels: string[];
    backgroundColor: string[];
    data: number[];
}

export function load (){
    const processedValues: ChartDataItem[] = chartdata.map(item => ({
        chartLabel: item.chartLabel,
        labels: item.labels,
        backgroundColor: item.backgroundColor,
        data: item.data,
    }));
    return {
        values: processedValues
    };
};
