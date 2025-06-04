<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import DataTable from "$lib/components/ui/cohorts-table/data-table.svelte";
  import { columns } from "./columns";
  let { data } = $props();
  //use cohort id array to populate cohort pages
  const cohortData = data.value;
</script>

<div class="gap-10 h-dvh flex flex-col justify-center items-center">
  {#each cohortData as data}
    <div>
      <Button href={"cohort-progress/" + data.cohortId}>
        {data.cohortName}
      </Button>
    </div>
  {/each}
  <DataTable columns={columns} data={data.value}/>
</div>



