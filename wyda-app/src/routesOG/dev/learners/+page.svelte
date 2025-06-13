<script lang="ts">
  import { type EntityProfile } from "$lib/data/entity.js";
  import Button from "$lib/components/ui/button/button.svelte";
  let { data } = $props();
  // assuming learnerID will be an array
  const result = data.learners;
  let learners: EntityProfile[] = $state([]);
  if (data.learners) {
    learners = result;
  }
  console.log(data);
</script>

<div>all learners page</div>

<div class="flex flex-col justify-center items-center gap-10">
  {#each learners as learner}
    <Button href={"learners/" + learner.id}>
      {learner.firstName}
    </Button>
  {/each}
</div>
