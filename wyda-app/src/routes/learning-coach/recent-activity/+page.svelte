<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js"
  
    let {data} = $props();
    let recentActivity = data.value.recentActivity;
  </script>
  

<div class="summary-stats">
  <div class="header text-2xl font-semibold">Recent Activity</div>
    <Table.Root>
        <Table.Header>
            <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Org/BU</Table.Head>
            <Table.Head>Challenge</Table.Head>
            <Table.Head>Date</Table.Head>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {#each recentActivity as activity}
            <Table.Row>
                <Table.Cell class="font-medium">{activity.name}</Table.Cell>
                <Table.Cell>{activity.org}</Table.Cell>
                <Table.Cell>{activity.challenge}</Table.Cell>
                <Table.Cell>{activity.date}</Table.Cell>
            </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
</div>