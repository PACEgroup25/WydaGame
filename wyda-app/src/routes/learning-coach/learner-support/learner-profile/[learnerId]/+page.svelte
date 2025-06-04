<script lang="ts">
    let {data} = $props();
    
    //profile page needs:
    //name, email, reflections, reflection quality scores, average reflection quality
    //reflection quality over time, scores across each challenge,
    console.log(data);
</script>

<div class="text-4xl flex flex-col gap-10">
    Learner Profile Page 
    <div>
        {data.info?.firstName + " " + data.info?.lastName}
    </div>
</div>
<div class="flex flex-col gap-10">
    <div>
        User ID: {data.info?.id}
    </div>
    <div>
        Email: {data.email}
    </div>
    <div>
        Gender: {data.gender}
    </div>
    <div>
        Role: {data.role}

    </div>
    <div>
        Education: {data.education}

    </div>
    <div>
        Learning Support: {data.learningSupport}
    </div>
    <div>
        Account Creation Date: {data.createdAt}
    </div>
</div>