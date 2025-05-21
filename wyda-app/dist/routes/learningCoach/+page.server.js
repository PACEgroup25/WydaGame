import { summaryData } from "./summaryData.js";
export function load() {
    const processedValues = {
        learners: summaryData.learners,
        recentActivity: summaryData.recentActivity,
        statistics: summaryData.statistics,
    };
    return {
        value: processedValues
    };
}
;
//# sourceMappingURL=+page.server.js.map