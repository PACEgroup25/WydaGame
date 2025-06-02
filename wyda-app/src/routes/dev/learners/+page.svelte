<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    let {data} = $props();
    // assuming learnerID will be an array
    const result = data.data.learnerID
    let learners : any[] = $state([]);
    if(data.data.learnerID){
        learners = result;
    }
</script>

<div>
    {#each learners as learner}
        <Button href={"learners/" + learner}>
        {learner}
        </Button>
    {/each}
</div>