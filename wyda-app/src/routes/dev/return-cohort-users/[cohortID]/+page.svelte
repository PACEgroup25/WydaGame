<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  let { data } = $props();
  console.log(data);
  const learnerInfo = data.learnerInfo;
  const metaData = data.metaData;
</script>

<div class="flex flex-col justify-center items-center gap-10">
  {metaData.cohortName}
  {#each learnerInfo as learner}
    <Button href={"/dev/learners/" + learner.profile.id}>
      <div>name: {learner.profile.firstName}</div>
      <div>id: {learner.profile.id}</div>
    </Button>
    {#if learner.metrics}
      <div>status: {learner.metrics.userStatus}</div>
    {/if}
  {/each}
</div>
