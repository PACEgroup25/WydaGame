<script lang="ts">
  let data = $props();
  console.log(data.data.value);
  import { columns } from "$lib/components/ui/data-table-coach/columns.js";
  import DataTable from "$lib/components/ui/data-table-coach/data-table.svelte";
  import Chart from "$lib/components/ui/chart/chart.svelte";

  const chartData = {
    chartLabel: "Average Reflection Qualtiy Over Time",
    labels: ["1","2","3","4","5","6"],
    label: 'My First Dataset',
    data: [2.5, 2.7, 3.1, 2.8, 2.5, data.data.averageReflectionQuality],
    fill: true,
    borderWidth: 5,
    borderColor: 'rgb(87, 197, 255)',
    tension: 0.3,
    size: {height : "2", width :"5"}
  };

  //the max data value and use for max y scale in chart
</script>

{#snippet stat(statistic : string ,description : string)}
  <div class="summary-stats">
    <div class="data text-4xl">{statistic}</div>
    <div class="description font-semibold">
      {description}
    </div>
  </div>
{/snippet}

<div class="">
  <div class="header text-2xl font-semibold mb-[1em] flex justify-between">
    Cohort: {data.data.cohortId}
  </div>
  <div
  class="stats-container flex flex-wrap justify-between w-full gap-10 mb-5"
  >
    {@render stat(data.data.onTrackUsers, "Users on track")}
    {@render stat(data.data.usersAtRisk, "Users at risk")}
    {@render stat(data.data.averageReflectionQuality, "Average reflection Quality")}
    {@render stat((23).toString(),"Learning Streaks")}
  </div>
  <Chart type={"line"} {...chartData}/>
  <DataTable columns={columns} data={data.data.value}/>
</div>
