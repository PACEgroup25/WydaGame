<script lang="ts">
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
  import Progress from "$lib/components/ui/progress/progress.svelte";
</script>

<div class="flex flex-col gap-10">
  <div class="text-4xl font-semibold">
    User Analytics
  </div>
  <div class="flex top-row gap-10">
    <div class="bg-red-100 score-container stats flex flex-col">
      <div class="flex">Total Points</div>
      <div class="text-3xl font-bold">2346</div>
      <div class="flex gap-1"><span class="text-green-500">+526</span><span>Compared to Cohort AVG: 1820</span></div>
    </div>
    <div class="bg-blue-100 reflection-qual stats flex flex-col">
      <div class="flex">AVG Reflection Quality</div>
      <div class="text-3xl font-bold">4.2</div>
      <div class="flex gap-1"><span class="text-green-500">+0.7</span><span>Compared to Cohort AVG: 3.5</span></div>
    </div>
    <div class="bg-yellow-100 avg-time stats">
      <div class="flex">AVG time spent per decision</div>
      <div class="text-3xl font-bold">2 Minutes</div>
      <div class="flex gap-1"><span class="text-green-500">-1:32</span><span>Compared to Cohort AVG: 3:32</span></div>
    </div>
  </div>
  <div class="section-1 flex gap-10">
    <div class="bg-green-100 percentages stats gap-2">
      <div class="flex text-2xl font-bold">Points Percentage Per Challenge</div>
      <div class="flex flex-col">
        <div class="flex text-xl font-semibold">LVL 1: Profitability Challenge</div>

      </div>
    </div>
    <div class="bg-purple-100 performances stats gap-2">
      <div class="flex text-2xl font-bold">Your Best Performances</div>
      <div class="flex text-xl font-semibold">5.1 CFO Perspective</div>
      <Progress value={92} max={100}/>
      <div class="flex text-xl font-semibold">4.2 COO Perspective</div>
      <div class="flex text-2xl font-bold">Areas Needing Improvement</div>
    </div>
  </div>
</div>