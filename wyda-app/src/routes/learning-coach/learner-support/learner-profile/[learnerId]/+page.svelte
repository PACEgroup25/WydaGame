<script lang="ts">
    let {data} = $props();
    
    //profile page needs:
    //name, email, reflections, reflection quality scores, average reflection quality
    //reflection quality over time, scores across each challenge,
    console.log(data);
</script>

<div>
    learner profile page: {data.info?.id}
</div>
<div>
    email: {data.email}
</div>