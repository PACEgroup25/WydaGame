<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  let { data } = $props();
  //use cohort id array to populate cohort pages
  const result = data.data.cohortID;
  let cohorts: string | string[] = $state([]);
  if (result) {
    cohorts = result;
  }
</script>

<div class="gap-10 h-dvh w-dvw flex justify-center items-center">
  {#each cohorts as cohort}
    <div>
      <Button href={"return-cohort-users/" + cohort}>
        {cohort}
      </Button>
    </div>
  {/each}
</div>
