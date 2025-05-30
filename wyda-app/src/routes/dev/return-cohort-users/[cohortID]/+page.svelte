<script lang="ts">
  let { data } = $props();
  console.log(data);
  const learners = data.learners;
  const metaData = data.metaData;
</script>

<div>
  {metaData.cohortName}
  {#each learners as learner}
    <div>name: {learner.firstName}</div>
    <div>id: {learner.id}</div>
  {/each}
</div>
