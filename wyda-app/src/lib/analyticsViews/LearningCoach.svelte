<script>
  import * as Table from "$lib/components/ui/table/index";
  import { UserRound, ChevronRight } from "@lucide/svelte";
</script>

<div class="main-container flex flex-wrap gap-10 mt-10">
  <div class="section-1-container w-full flex justify-center">
    <div class="section-1 max-w-[65em] flex flex-col gap-10 justify-center">
      <div class="heading text-4xl w-full p-4 font-bold">
        Welcome Back Example User!
      </div>
      <div class="stats-container flex flex-wrap justify-around w-full gap-10">
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">65%</div>
          <div class="description font-semibold">On track learners</div>
        </div>
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">10%</div>
          <div class="description font-semibold">At risk</div>
        </div>
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">5.7</div>
          <div class="description font-semibold">Avg reflection quality</div>
        </div>
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">20</div>
          <div class="description font-semibold">Active learning streaks</div>
        </div>
      </div>

      <div class="learner-info flex flex-wrap w-full justify-between gap-10">
        <div
          class="recent-activity border border-[#7accc6] p-4 flex flex-col rounded-sm"
        >
          <div class="header text-2xl font-semibold">Recent Activity</div>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Org/BU</Table.Head>
                <Table.Head>Challenge</Table.Head>
                <Table.Head class="text-center">Date</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #1</Table.Cell>
                <Table.Cell>Sales</Table.Cell>
                <Table.Cell>Challenge 5</Table.Cell>
                <Table.Cell>Today 4:15</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #2</Table.Cell>
                <Table.Cell>Marketing</Table.Cell>
                <Table.Cell>Challenge 1</Table.Cell>
                <Table.Cell>Yesterday 9:00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #3</Table.Cell>
                <Table.Cell>Tech</Table.Cell>
                <Table.Cell>Challenge 3</Table.Cell>
                <Table.Cell>Yesterday 3:15</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #4</Table.Cell>
                <Table.Cell>Sales</Table.Cell>
                <Table.Cell>Challenge 2</Table.Cell>
                <Table.Cell>Yesterday 2:56</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <div
          class="learner-support border border-[#7accc6] p-4 flex flex-col rounded-sm"
        >
          <div class="header text-2xl font-semibold">Learner Support</div>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #1</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #2</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #3</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #4</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  </div>
</div>
