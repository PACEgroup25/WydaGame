<script lang="ts">
  let data = $props();
  console.log(data.data.value);
  import { columns } from "$lib/components/ui/data-table-coach/columns.js";
  import DataTable from "$lib/components/ui/data-table-coach/data-table.svelte";
  import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
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
    <SideBarLearningCoach></SideBarLearningCoach>
    <div class="dashboard justify-start items-center">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        <div class="summary-stats">
          <div class="header text-2xl font-semibold mb-[1em] flex justify-between">
            Cohort: {data.data.cohortId}
          </div>
          <div
          class="stats-container flex flex-wrap justify-around w-full gap-10 mb-5"
          >
            {@render stat(data.data.onTrackUsers, "Users on track")}
            {@render stat(data.data.usersAtRisk, "Users at risk")}
            {@render stat(data.data.averageReflectionQuality, "Average reflection Quality")}
            {@render stat((23).toString(),"Learning Streaks")}
          </div>
          <DataTable columns={columns} data={data.data.value}/>
        </div>
      </div>
    </div>
  </div>
</main>
