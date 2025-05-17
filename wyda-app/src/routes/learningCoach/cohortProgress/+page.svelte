<script>
  import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import * as Table from "$lib/components/ui/table/index.js";
  import DataTable from "./data-table.svelte";
  import { columns } from "./columns.ts";
  let { data } = $props();
  let recentActivity = data.value.recentActivity;
  console.log(recentActivity);

</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard justify-start items-center">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        <div class="summary-stats">
          <div class="header text-2xl font-semibold">Cohort Progress</div>
            <DataTable columns={columns} data={data.value} />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
