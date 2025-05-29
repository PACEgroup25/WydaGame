<script lang="ts">
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
  import Progress from "$lib/components/ui/progress/progress.svelte";
</script>

{#snippet performanceIndicator (title : string, value: number, titleStyle? : string)}
  <div class="items-center gap-3">
    <div class={titleStyle ?? "font-normal"}>{title}</div> 
    <div class="flex items-center gap-3">
      <Progress value={value} max={100}/> <span>{value.toString() + "%"}</span>
    </div>
  </div>
{/snippet}

<div class="flex flex-col gap-10">
  <div class="text-4xl font-semibold">
    User Analytics
  </div>
  <div class="flex top-row gap-10">
    <div class="score-container stats flex flex-col">
      <div class="flex">Total Points</div>
      <div class="text-3xl font-bold">2346</div>
      <div class="flex gap-1"><span class="text-green-500">+526</span><span>Compared to Cohort AVG: 1820</span></div>
    </div>
    <div class="reflection-qual stats flex flex-col">
      <div class="flex">AVG Reflection Quality</div>
      <div class="text-3xl font-bold">4.2</div>
      <div class="flex gap-1"><span class="text-green-500">+0.7</span><span>Compared to Cohort AVG: 3.5</span></div>
    </div>
    <div class="avg-time stats">
      <div class="flex">AVG time spent per decision</div>
      <div class="text-3xl font-bold">2 Minutes</div>
      <div class="flex gap-1"><span class="text-green-500">-1:32</span><span>Compared to Cohort AVG: 3:32</span></div>
    </div>
  </div>
  <div class="section-1 flex gap-10">
    <div class="percentages stats gap-5">
      <div class="flex text-2xl font-bold">Score Percentage Per Challenge and Time Spent</div>
      <div class="flex flex-col gap-2">
        <div class="flex text-xl font-semibold">LVL 1: Profitability Challenge</div>
        {@render performanceIndicator("1.1 EVP: 15 Minutes",80)}
        {@render performanceIndicator("1.2 CFO: 20 Minutes",70)}
        <div class="flex text-xl font-semibold">LVL 2: Launch Strategy Challenge</div>
        {@render performanceIndicator("2.1 CMO: 12 Minutes",78)}
        {@render performanceIndicator("2.2 COO: 22 Minutes",83)}
      </div>
    </div>
    <div class="performances stats gap-5">
      <div class="flex text-2xl font-bold">Your Best Performances</div>
      {@render performanceIndicator("5.1 CFO: 24 Minutes",92)}
      {@render performanceIndicator("4.2 COO: 18 Minutes",90)}
      <div class="flex text-2xl font-bold">Areas Needing Improvement</div>
      {@render performanceIndicator("7.2 CEO: 30 Minutes",62)}
      {@render performanceIndicator("6.2 CHRO: 28 Minutes",48)}
    </div>
  </div>
  <div class="section-2 flex stats">
    <div class="flex text-2xl font-bold">Key Takeaways</div>
  </div>
</div>