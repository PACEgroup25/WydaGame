<script>
    import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
    import * as Table from "$lib/components/ui/table/index.js"
  
    let {data} = $props();
    let recentActivity = data.value.recentActivity;
  </script>
  
  <main>
    <div class="page-container flex flex-row">
      <SideBarLearningCoach />
      <div class="dashboard">
        <div class="main-container flex flex-wrap gap-10 mt-10">
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
        </div>
      </div>
    </div>
  </main>
  
  <style>
  </style>
  