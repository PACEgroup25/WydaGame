<script lang="ts">
  import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import * as Table from "$lib/components/ui/table/index.js";
  import DataTable from "./data-table.svelte";
  import { columns } from "./columns.ts";
  let { data } = $props();
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
</script>

{#snippet stat(statistic : string ,description : string)}
  <div class="summary-stats">
    <div class="data text-4xl">{statistic}</div>
    <div class="description font-semibold">
      {description}
    </div>
  </div>
{/snippet}

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard justify-start items-center">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        <div class="summary-stats">
          <div class="header text-2xl font-semibold mb-[1em]">
            Cohort Progress
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
    </div>
  </div>
</main>

<style>
</style>
