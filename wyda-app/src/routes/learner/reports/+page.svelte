<script lang="ts">
  let { data } = $props();
  import Chart from "$lib/components/ui/chart/chart.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Download } from "@lucide/svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.ts";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { toast } from "svelte-sonner";
  console.log(data);

  const keyLearningDecisionData = [
    { header: "Task 1", feedback: "You did well" },
    { header: "Task 2", feedback: "You did well" },
    { header: "Task 3", feedback: "You did well" },
    { header: "Task 4", feedback: "You did well" },
    { header: "Task 5", feedback: "You did well" },
    { header: "Task 6", feedback: "You did well" },
  ];

  export const chartdata = [
    {
      chartLabel: "Overall User's Progress By Levels",
      labels: ["Onboarding Activities", "Level Name", "Profitability"],
      backgroundColor: ["rgb(180,221,221)"],
      data: [12, 10, 5],
    },
    {
      chartLabel: "Count of anonymous_id by scenario_name",
      labels: [
        "1.1 EVP",
        "1.2 CFO",
        "Company Breifing",
        "N/A",
        "Orientation to Simulation",
      ],
      backgroundColor: ["rgb(180,221,221)"],
      data: [22, 10, 30, 70, 50],
    },
    {
      chartLabel: "Count of Users by Attempts",
      labels: [
        "id1",
        "id2",
        "id3",
        "id4",
        "id5",
        "id6",
        "id7",
        "id8",
        "id9",
        "id10",
        "id11",
        "id12",
        "id13",
      ],
      backgroundColor: ["rgb(180,221,221)"],
      data: [14, 6, 8, 9, 9, 2, 5, 11, 24, 9, 6, 8, 66],
    },
    {
      chartLabel: "User's Reflection Quality",
      labels: ["low", "high"],
      backgroundColor: ["rgba(222,90,90,1)", "rgba(180,221,221,1)"],
      data: [300, 150],
    },

    {
      chartLabel: "Cohort Progress by Levels",
      labels: ["5d5f86144b98850017a51fea", "5d7738a41373480017b2c5d1", "N/A"],
      backgroundColor: ["rgba(222,90,90,1)", "rgba(180,221,221,1)"],
      data: [32, 79, 66],
    },
  ];
</script>

<div class="flex w-full flex-col justify-start">
  <div class="font-semibold text-4xl w-full flex justify-center mt-10">
    Individual Learning Report
  </div>
  <div class="flex flex-col w-full h-full justify-start items-center">
    <div class="flex w-full justify-end mt-10">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class={buttonVariants({ variant: "outline" })}
          ><Download />Export</DropdownMenu.Trigger
        >
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <div class="flex flex-col">
              <Button
                variant={"ghost"}
                onclick={() => {
                  toast("Your CSV file is downloading");
                  //downloadCSV(data);
                  console.log("downloading");
                }}
              >
                Export as CSV
              </Button>
              <Button
                variant={"ghost"}
                onclick={() => {
                  toast("Your PDF file is downloading");
                  //downloadAsPDF(data);
                }}
              >
                Export as PDF
              </Button>
            </div>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
    <div class="flex justify-center items-start gap-10 mt-10">
      <div class="flex flex-col justify-start gap-10">
        <div class="text-3xl font-semibold">User Metrics</div>
        {#each chartdata as data, index}
          {#if index < 3}
            <Chart {...data} type={"bar"} />
          {:else}
            <Chart {...data} type={"pie"} />
          {/if}
        {/each}
      </div>
      <div class="flex flex-col gap-10">
        <div class="text-3xl font-semibold">Key Learning Decisions</div>
        {#each keyLearningDecisionData as data}
          <div class="border border-black gap-10">
            <div class="text-2xl font-semibold">{data.header}</div>
            <div>{data.feedback}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
