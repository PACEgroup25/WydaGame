<script lang="ts">
  let { data } = $props();
  import Chart from "$lib/components/ui/chart/chart.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { Download } from "@lucide/svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.ts";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { toast } from "svelte-sonner";
  import * as Select from "$lib/components/ui/select/index.js";
  import Progress from "$lib/components/ui/progress/progress.svelte";
  console.log(data);

  const keyLearningDecisionData = [
    {
      header: "Crisis Management",
      feedback:
        "You had many decisions to make in the early days of ADA's battery crisis, with limited information to inform you choices. When choosing whether to prioritise meeting the demands of ADA's customers or alleviating the pressure on your customer services staff, you chose to put the wellbeing of your staff ahead of ADA's customers. While this strategy may seem counter-intuitive to some. Your savvy decision-making reduced levels of staff burnout, and decreased the risk of customer experience staff attrition that would make managing the crisis impossible. Ultimately it's your customer service people who interact with your customers, and if they can't do their best work, a business can't provide its best service to customers anyway. Well done!",
    },
    {
      header: "Cash Flow Crisis",
      feedback:
        "Upon discovering ADA's cashfloiw crisis as CFO. You were upfront with the CEO about ADA's financial situation, and did not encourage the CEO to conceal the dire financial situation secret from the Board or other leaders. Your actions demonstrate the courage to live up to the reponsibility entrusted to the C-Suite, a commitment to ethical leadership and setting the expectation of a culter of tranparency among the executive - no matter how uncomfortable these conversations can be. Well done!",
    },
    {
      header: "Restructure Communication Decision",
      feedback:
        "As CEO, after announcing ADA's strategic pivot and the restructure associated with it to the executive team, you had the decide whether or not to share the news with the rest of ADA's staff. In this instance, you directed the executive to keep the news quiet until the particulars of the restructure and redundancies had been decided. It's understandable to want to control information to maintain confidentiality, and commendable to want ahve all the answers buttoned down before you communicate the news. Unfortunately, it's too slow, and it's not transparent enough. Before you can share all the final details, you could share the high level strategic decisions made, and the big picture of what this means for the structure of the organisation. Being transparent where you can avoids employees being shocked and blindsided if they are impacted, and helps remaining employees adjust too. It's best to provide certainty on the reasoning and the processs, like how decisions will be made, how people will be tread, and when people will find out more.",
    },
    { header: "Enacting McKinseys 7s", feedback: "You did well" },
    { header: "Resignation Dilemma", feedback: "You did well" },
    { header: "Securing Organisation Buy in", feedback: "You did well" },
    { header: "Motivating Your Team", feedback: "" },
    { header: "Setting Strategic Priorities", feedback: "" },
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

  let value = $state("User 1");
</script>

{#snippet performanceIndicator(
  title: string,
  value: number,
  titleStyle?: string
)}
  <div class="items-center gap-3">
    <div class={titleStyle ?? "font-normal"}>{title}</div>
    <div class="flex items-center gap-3">
      <Progress {value} max={100} /> <span>{value.toString() + "%"}</span>
    </div>
  </div>
{/snippet}

<div class="flex w-full flex-col justify-start">
  <div class="font-semibold text-4xl w-full flex justify-center mt-10">
    Individual Learning Report
  </div>
  <div class="flex flex-col w-full h-full justify-start items-center">
    <div class="flex w-full justify-between mt-10">
      <Select.Root type="single" bind:value>
        <Select.Trigger class="w-[180px]">
          {value}
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="User 1">User 1</Select.Item>
          <Select.Item value="User 2">User 2</Select.Item>
          <Select.Item value="User 3">User 3</Select.Item>
        </Select.Content>
      </Select.Root>
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
      <div class="flex flex-col w-[30em] pb-10 justify-start gap-10">
        <div class="text-3xl font-semibold">User Metrics</div>
        <div class="flex flex-col top-row gap-10">
          <div class="score-container w-[30em] stats flex flex-col">
            <div class="flex">Total Points</div>
            <div class="text-3xl font-bold">2346</div>
            <div class="flex gap-1">
              <span class="text-green-500">+526</span><span
                >Compared to Cohort AVG: 1820</span
              >
            </div>
          </div>
          <div class="reflection-qual stats flex flex-col">
            <div class="flex">AVG Reflection Quality</div>
            <div class="text-3xl font-bold">4.2</div>
            <div class="flex gap-1">
              <span class="text-green-500">+0.7</span><span
                >Compared to Cohort AVG: 3.5</span
              >
            </div>
          </div>
          <div class="avg-time stats">
            <div class="flex">AVG time spent per decision</div>
            <div class="text-3xl font-bold">2 Minutes</div>
            <div class="flex gap-1">
              <span class="text-green-500">-1:32</span><span
                >Compared to Cohort AVG: 3:32</span
              >
            </div>
          </div>
        </div>
        <div class="percentages stats gap-5">
          <div class="flex text-2xl font-bold">
            Score Percentage Per Challenge and Time Spent
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex text-xl font-semibold">Onboarding Activities</div>
            {@render performanceIndicator(
              "Orientation to Simulation: 15 Minutes",
              90
            )}
            {@render performanceIndicator("Company Briefing: 25 Minutes", 85)}

            <div class="flex text-xl font-semibold">
              LVL 1: Profitability Challenge
            </div>
            {@render performanceIndicator("1.1 EVP: 40 Minutes", 80)}
            {@render performanceIndicator("1.2 CFO: 25 Minutes", 70)}

            <div class="flex text-xl font-semibold">
              LVL 2: Launch Strategy Challenge
            </div>
            {@render performanceIndicator("2.0 Learning Goals: 5 Minutes", 95)}
            {@render performanceIndicator("2.1 CMO: 30 Minutes", 78)}
            {@render performanceIndicator("2.2 COO: 30 Minutes", 83)}

            <div class="flex text-xl font-semibold">
              LVL 3: Crisis Management Challenge
            </div>
            {@render performanceIndicator("3.1 CMO: 30 Minutes", 82)}
            {@render performanceIndicator(
              "3.2 VP Customer Experience: 30 Minutes",
              76
            )}

            <div class="flex text-xl font-semibold">
              LVL 4: Supply Chain Challenge
            </div>
            {@render performanceIndicator("4.1 HPM: 40 Minutes", 79)}
            {@render performanceIndicator("4.2 COO: 30 Minutes", 81)}

            <div class="flex text-xl font-semibold">
              LVL 5: Liquidity Management Challenge
            </div>
            {@render performanceIndicator("5.1 CFO: 40 Minutes", 75)}
            {@render performanceIndicator("5.2 CEO: 45 Minutes", 80)}

            <div class="flex text-xl font-semibold">
              LVL 6: Optimising Structure Challenge
            </div>
            {@render performanceIndicator("6.1 CEO: 45 Minutes", 83)}
            {@render performanceIndicator("6.2 CHRO: 40 Minutes", 77)}

            <div class="flex text-xl font-semibold">
              LVL 7: Leading Transformation Challenge
            </div>
            {@render performanceIndicator("7.1 CIO: 40 Minutes", 84)}
            {@render performanceIndicator("7.2 CEO: 40 Minutes", 88)}

            <div class="flex text-xl font-semibold">
              LVL 8: End of Game Assessment Challenge
            </div>
            {@render performanceIndicator("8.1 Assessment: 25 Minutes", 91)}

            <div class="flex text-xl font-semibold">
              LVL 9: Knowledge Refresh Challenge
            </div>
            {@render performanceIndicator(
              "9.1 Knowledge Refresh (Always Available)",
              100
            )}
          </div>
          <div class="flex flex-col gap-2 mt-4 border-t pt-4">
            <div class="flex text-xl font-semibold">Summary</div>
            <div class="flex justify-between text-base">
              <span>Average Time per Activity:</span>
              <span>~37.35 Minutes</span>
            </div>
            <div class="flex justify-between text-base">
              <span>Average Performance Score:</span>
              <span>~79.84%</span>
            </div>
          </div>
        </div>
        <div class="performances stats gap-5">
          <div class="flex text-2xl font-bold">Your Best Performances</div>
          {@render performanceIndicator("8.1 Assessment: 25 Minutes", 91)}
          {@render performanceIndicator(
            "9.1 Knowledge Refresh (Always Available)",
            100
          )}

          <div class="flex text-2xl font-bold">Areas Needing Improvement</div>
          {@render performanceIndicator("1.2 CFO: 25 Minutes", 70)}
          {@render performanceIndicator("5.1 CFO: 40 Minutes", 75)}
        </div>
      </div>
      <div class="flex flex-col gap-10">
        <div class="text-3xl font-semibold w-md">Key Learning Decisions</div>
        {#each keyLearningDecisionData as data}
          <div class="stats gap-10">
            <div class="text-2xl font-semibold">{data.header}</div>
            <Textarea />
            <Button variant="outline">Submit</Button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
