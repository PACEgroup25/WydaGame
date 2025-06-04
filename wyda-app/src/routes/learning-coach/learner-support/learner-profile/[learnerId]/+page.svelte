<script lang="ts">
    let {data} = $props();
    import * as Card from '$lib/components/ui/card/index';
    
    //profile page needs:
    //name, email, reflections, reflection quality scores, average reflection quality
    //reflection quality over time, scores across each challenge,
    console.log(data);
</script>

<div class="flex flex-col gap-10">
    <div class="text-4xl mt-10">
        User Profile Page 
    </div>
    <Card.Root> 
        <Card.Header> 
            <Card.Title> 
                Personal Information
            </Card.Title>
            <Card.Description> 
                General User and Account Details
            </Card.Description>
        </Card.Header>
        <Card.Content class="flex flex-col gap-5"> 
            <div>
                {data.info?.firstName + " " + data.info?.lastName}
            </div>
            <div>
                User ID: {data.info?.id}
            </div>
            <div>
                Gender: {data.info?.gender}
            </div>
            <div>
                Role: {data.info?.role}
            </div>
            <div>
                Education: {data.info?.education}
            </div>
            <div>
                Learning Support: {data.info?.learningSupport}
            </div>
            <div>
                Account Creation Date: {data.info?.createdAt?.toDateString()}
            </div>
        </Card.Content>
        <Card.Footer> 

        </Card.Footer>
    </Card.Root>

    <Card.Root> 
        <Card.Header> 
            <Card.Title> 
                Contact Info
            </Card.Title>
        </Card.Header>
        <Card.Content> 
            <div>
                Email: {data.email}
            </div>
        </Card.Content>
    </Card.Root>

</div>