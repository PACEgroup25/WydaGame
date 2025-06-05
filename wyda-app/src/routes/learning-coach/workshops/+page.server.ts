import { chartdata } from "./data.";


export type ChartDataItem = {
    chartLabel: string;
    labels: string[];
    backgroundColor?: string[];
    data?: number[];
    datasets?: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

export function load (){
    const processedValues: ChartDataItem[] = chartdata.map(item => ({
        chartLabel: item.chartLabel,
        labels: item.labels,
        backgroundColor: item.backgroundColor ?? [],
        data: item.data ?? [],
        datasets: item.datasets ?? undefined
      }));
    return {
        values: processedValues
    };
};

