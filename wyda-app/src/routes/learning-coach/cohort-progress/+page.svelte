<script lang="ts">
  import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import * as Select from "$lib/components/ui/select/index";
  import DataTable from "$lib/components/ui/data-table-coach/data-table.svelte";
  import { columns } from "$lib/components/ui/data-table-coach/columns.js";
  let { data } = $props();
  console.log(data);
  let statistics = [
      {
        value: "65%",
        description: "On track learners",
      },
      {
        value: "10%",
        description: "At risk",
      },
      {
        value: "5.7",
        description: "Avg reflection quality",
      },
      {
        value: "20",
        description: "Active learning streaks",
      },
    ];

    let cohort = $state("1");
</script>

{#snippet stat(statistic : string ,description : string)}
  <div class="summary-stats">
    <div class="data text-4xl">{statistic}</div>
    <div class="description font-semibold">
      {description}
    </div>
  </div>
{/snippet}


<div class="main-container flex flex-wrap gap-10 mt-10">
  <div class="summary-stats">
    <div class="header text-2xl font-semibold mb-[1em] flex justify-between">
      Cohort Progress
      <Select.Root bind:value={cohort} type="single">
        <Select.Trigger class="w-[180px] mb-5">Cohort {cohort}</Select.Trigger>
        <Select.Content>
          <Select.Item value={"1"}>Cohort 1</Select.Item>
          <Select.Item value={"2"}>Cohort 2</Select.Item>
          <Select.Item value={"3"}>Cohort 3</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
    <div
    class="stats-container flex flex-wrap justify-around w-full gap-10 mb-5"
    >
      {@render stat(data.onTrackUsers, "Users on track")}
      {@render stat(data.usersAtRisk, "Users at risk")}
      {@render stat(data.averageReflectionQuality, "Average reflection Quality")}
      {@render stat((23).toString(),"Learning Streaks")}
    </div>
    <DataTable {columns} data={data.value} />
  </div>
</div>


