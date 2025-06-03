<script lang="ts">
  let data = $props();
  import { columns } from "./columns";
  import DataTable from "$lib/components/ui/data-table-coach/data-table.svelte";
  import Chart from "$lib/components/ui/chart/chart.svelte";

  const chartData = {
    chartLabel: "Average Reflection Qualtiy Over Time",
    labels: ["1", "2", "3", "4", "5", "6"],
    label: "My First Dataset",
    data: [2.5, 2.7, 3.1, 2.8, 2.5, data.data.averageReflectionQuality],
    fill: true,
    borderWidth: 5,
    borderColor: "rgb(87, 197, 255)",
    tension: 0.3,
    y: {
      beginAtZero: false,
      max: 3.5,
    },
  };

  const chartData2 = {
    chartLabel: "Cohort Status",
    labels: ["Users At risk", "Users On Track"],
    backgroundColor: ["rgba(222,90,90,1)", "rgba(180,221,221,1)"],
    data: [data.data.usersAtRisk, data.data.usersOnTrack],
  };

  //the max data value and use for max y scale in chart
</script>

{#snippet stat(statistic: string, description: string)}
  <div class="summary-stats">
    <div class="data text-4xl">{statistic}</div>
    <div class="description font-semibold">
      {description}
    </div>
  </div>
{/snippet}

<main>
  <div class="header text-2xl font-semibold mb-[1em] flex justify-between">
    Cohort: {data.data.cohortName}
    Organisation: {data.data.org}
  </div>
  <div
    class="stats-container flex flex-wrap justify-between w-full gap-10 mb-5"
  >
    {@render stat(data.data.percentageOnTrackUsers, "Users on track")}
    {@render stat(data.data.percentageUsersAtRisk, "Users at risk")}
    {@render stat(
      data.data.averageReflectionQuality,
      "Average reflection Quality"
    )}
    {@render stat((23).toString(), "Learning Streaks")}
  </div>
  <!-- <div class="flex">
    <Chart
      type={"line"}
      {...chartData}
      size={{ height: "500px", width: "500px" }}
    />
    <Chart
      type={"pie"}
      {...chartData2}
      size={{ height: "500px", width: "500px" }}
    />
  </div> -->
  <DataTable {columns} data={data.data.value} />
</main>
