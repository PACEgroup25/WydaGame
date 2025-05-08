<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    Zap,
    ChartColumn,
    BookOpen,
    TrendingUp,
    FastForward,
  } from "@lucide/svelte";
  import * as Table from "$lib/components/ui/table";
  import { Progress } from "$lib/components/ui/progress";
</script>

<div class="dashboard">
  <div class="dash-container w-[60em] flex flex-col items-center">
    <div class="heading-container mt-16 flex w-full">
      <div class="text-container flex flex-col w-full justify-bewteen mb-10">
        <div class="heading text-3xl font-semibold">
          Business Acumen Essentials
        </div>
        <div class="description max-w-[30em]">
          In this immersive simulation, you'll navigate real-world challenges to
          broaden your perspective and build business savvy.
        </div>
      </div>
      <div class="button-container">
        <Button class="bg-[#1b5d74]"><Zap />Launch next challenge</Button>
      </div>
    </div>
    <div class="cards-container flex justify-between w-full mb-8">
      <div class="points border border-[#7accc6] p-4 flex flex-col rounded-sm">
        <TrendingUp />
        Points
        <div class="points">102</div>
        <div class="date">Since 10.12.25</div>
      </div>
      <div
        class="next-challenge border border-[#7accc6] p-4 flex flex-col rounded-sm"
      >
        <FastForward />
        Next challenge
        <div class="challenge-title">Orientation</div>
      </div>
      <div
        class="progress border border-[#7accc6] p-4 flex flex-col rounded-sm"
      >
        <ChartColumn />
        Progress
        <div class="tracker flex">
          <div class="name w-[5em]">John Doe</div>
          <Progress class="w-[25em] ml-[1em]" />
        </div>
        <div class="tracker flex">
          <div class="target w-[5em]">Target</div>
          <Progress class="w-[25em] ml-[1em]" />
        </div>
      </div>
    </div>
    <div class="program w-full">
      <div class="header"></div>
      <div class="table border border-[#7accc6] p-4 w-full rounded-sm">
        <BookOpen />
        Program
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head class="w-full">Title</Table.Head>
              <Table.Head class="text-right">Est. Time</Table.Head>
              <Table.Head></Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell class="font-medium">Onboarding Activities</Table.Cell>
              <Table.Cell class="text-right">40 min</Table.Cell>
              <Table.Cell>Launch</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell class="font-medium"
                >Orientation to Simulation</Table.Cell
              >
              <Table.Cell class="text-right">15 min</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell class="font-medium">Onboarding Activities</Table.Cell>
              <Table.Cell class="text-right">25 min</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  </div>
</div>
