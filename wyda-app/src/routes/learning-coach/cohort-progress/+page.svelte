<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import DataTable from "$lib/components/ui/cohorts-table/data-table.svelte";
  import { columns } from "./columns";
  import {
    UserCheck,
    UserX,
    Star,
    Flame,
    type Icon as IconType,
  } from "@lucide/svelte";
  let { data } = $props();
  //use cohort id array to populate cohort pages
  const cohortData = data.value;
</script>

{#snippet stat(statistic: string, description: string, icon: typeof IconType)}
  {@const Icon = icon}
  <div class="summary-stats gap-2">
    <div class="icon"><Icon /></div>
    <div class="description font-semibold">
      {description}
    </div>
    <div class="data text-3xl font-semibold">{statistic}</div>
  </div>
{/snippet}

<div class="gap-10 h-dvh flex flex-col justify-start items-center">
  <div class="mt-[10em] w-full">
    <div class="text-4xl">Learner Cohorts</div>
  </div>
  <div class="w-full text-2xl">Overall Cohort Statistics</div>
  <div class="flex gap-5">
    {@render stat("6", "Users on track", UserCheck)}
    {@render stat("4", "Users at risk", UserX)}
    {@render stat("3.2", "Average reflection Quality", Star)}
    {@render stat((2).toString(), "Learning Streaks", Flame)}
  </div>
  <DataTable {columns} data={data.value} />
</div>
