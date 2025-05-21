import { chartdata } from "./data";
export function load() {
    const processedValues = chartdata.map(item => ({
        chartLabel: item.chartLabel,
        labels: item.labels,
        backgroundColor: item.backgroundColor,
        data: item.data,
    }));
    return {
        values: processedValues
    };
}
;
//# sourceMappingURL=+page.server.js.map