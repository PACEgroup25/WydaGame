<script>
  let data = $props();
  console.log(data.data.value);
  import { columns } from "$lib/components/ui/data-table-coach/columns.js";
  import DataTable from "$lib/components/ui/data-table-coach/data-table.svelte";
  import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach></SideBarLearningCoach>
    <div class="dashboard justify-start items-center">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        <div class="summary-stats">
          <div class="header text-2xl font-semibold mb-[1em] flex justify-between">
            Cohort: {data.data.cohortId}
          </div>
          <DataTable columns={columns} data={data.data.value}/>
        </div>
      </div>
    </div>
  </div>
</main>
