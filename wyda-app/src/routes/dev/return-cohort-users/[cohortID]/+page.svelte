<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  let { data } = $props();
  console.log(data);
  const learners = data.learners;
  const metaData = data.metaData;
</script>

<div class="flex flex-col justify-center items-center gap-10">
  {metaData.cohortName}
  {#each learners as learner}
    <Button href={"/dev/learners/" + learner.id}>
      <div>name: {learner.firstName}</div>
      <div>id: {learner.id}</div>
    </Button>
  {/each}
</div>
