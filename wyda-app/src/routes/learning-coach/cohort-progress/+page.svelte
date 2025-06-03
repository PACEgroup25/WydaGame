<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  let { data } = $props();
  //use cohort id array to populate cohort pages
  const cohortData = data.value;
</script>

<div class="gap-10 h-dvh w-dvw flex justify-center items-center">
  {#each cohortData as data}
    <div>
      <Button href={"cohort-progress/" + data.cohortId}>
        {data.cohortName}
      </Button>
    </div>
  {/each}
</div>
