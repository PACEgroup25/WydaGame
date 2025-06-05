<script lang="ts">
  import Progress from "$lib/components/ui/progress/progress.svelte";
  let { data } = $props();
  import * as Card from "$lib/components/ui/card/index";

  const reflections = [
    {
      level: "LVL 1: Profitability Challenge",
      text: "During the EVP scenario, I realized that balancing purpose and performance requires nuanced decision-making. I learned that aligning incentives with long-term values creates better team buy-in.",
      score: 4,
    },
    {
      level: "LVL 1: Profitability Challenge",
      text: "The CFO decision revealed gaps in my understanding of financial trade-offs. I chose aggressive cost-cutting without forecasting downstream effects, which hurt team morale.",
      score: 2,
    },
    {
      level: "LVL 2: Launch Strategy Challenge",
      text: "Crafting the CMO campaign made me appreciate how brand voice, audience targeting, and budget allocation must align. This was one of the most enjoyable challenges for me.",
      score: 5,
    },
    {
      level: "LVL 3: Crisis Management Challenge",
      text: "Responding to customer backlash was stressful. I focused too much on logistics and not enough on transparency, which delayed trust recovery. I’ll prioritize messaging next time.",
      score: 3,
    },
    {
      level: "LVL 5: Liquidity Management Challenge",
      text: "This was the toughest decision for me. I had to choose between dilution and debt, and I leaned too heavily on equity without considering future fundraising implications.",
      score: 3,
    },
    {
      level: "LVL 8: End of Game Assessment Challenge",
      text: "The final reflection helped me realize how far I’ve come. I now think more systemically and consider both stakeholder and financial outcomes in decision-making.",
      score: 5,
    },
  ];

  //profile page needs:
  //name, email, reflections, reflection quality scores, average reflection quality
  //reflection quality over time, scores across each challenge,
  console.log(data);
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

<div class="flex gap-10">
  <div class="flex flex-col gap-10">
    <div class="text-4xl mt-10">User Profile Page</div>
    <Card.Root>
      <Card.Header>
        <Card.Title>Personal Information</Card.Title>
        <Card.Description>General User and Account Details</Card.Description>
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
      <Card.Footer></Card.Footer>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>Contact Info</Card.Title>
      </Card.Header>
      <Card.Content>
        <div>
          Email: {data.email}
        </div>
      </Card.Content>
    </Card.Root>
    <Card.Root>
      <Card.Header>
        <Card.Title>User Reflections</Card.Title>
        <Card.Description
          >Insights and quality of recent reflections, grouped by challenge
          level</Card.Description
        >
      </Card.Header>
      <Card.Content class="flex flex-col gap-5 w-[30em] text-wrap break-words">
        {#each reflections as reflection, i (i)}
          {#if i === 0 || reflection.level !== reflections[i - 1].level}
            <div class="text-lg font-semibold mt-4">{reflection.level}</div>
          {/if}
          <div class="flex flex-col gap-1">
            <div>{reflection.text}</div>
            <div class="text-sm text-gray-500">Score: {reflection.score}/5</div>
          </div>
        {/each}
      </Card.Content>
    </Card.Root>
  </div>
  <div class="flex flex-col mt-10 w-[30em] pb-10 justify-start gap-10">
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
</div>
