<script lang="ts">
    let {data} = $props();
    console.log(data.learnerId);
    //profile page needs:
    //name, email, reflections, reflection quality scores, average reflection quality
    //reflection quality over time, scores across each challenge,
</script>

<div>
    learner profile page: {data.learnerId}
</div>