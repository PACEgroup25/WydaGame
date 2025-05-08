<script>
    import * as Table from "$lib/components/ui/table/index";
    import { UserRound, ChevronRight } from "@lucide/svelte";
    let data = $props();
    let learners = data.learners;
</script>

<div class="summary-stats">
    <div class="header text-2xl font-semibold">Learner Support</div>
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each learners as learner}
          <Table.Row>
            <Table.Cell class="flex"><UserRound />{learner}</Table.Cell>
            <Table.Cell><ChevronRight /></Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
</div>