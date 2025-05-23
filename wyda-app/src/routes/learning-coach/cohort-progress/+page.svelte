<script lang="ts">
  import * as Select from "$lib/components/ui/select/index";
  import DataTable from "$lib/components/ui/data-table-coach/data-table.svelte";
  import { columns } from "$lib/components/ui/data-table-coach/columns.js";
  import {
    UserCheck,
    UserX,
    Star,
    Flame,
    type Icon as IconType,
  } from "@lucide/svelte";
  let { data } = $props();
  console.log(data);
  let cohort = $state("1");
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

<main>
  <div class="header text-3xl font-semibold mb-[1em] flex justify-between">
    Cohort Progress
    <Select.Root bind:value={cohort} type="single">
      <Select.Trigger class="w-[180px] mb-5">Cohort {cohort}</Select.Trigger>
      <Select.Content>
        <Select.Item value={"1"}>Cohort 1</Select.Item>
        <Select.Item value={"2"}>Cohort 2</Select.Item>
        <Select.Item value={"3"}>Cohort 3</Select.Item>
      </Select.Content>
    </Select.Root>
  </div>
  <div class="stats-container flex flex-wrap justify-around w-full gap-10 mb-5">
    {@render stat(data.onTrackUsers, "Users on track", UserCheck)}
    {@render stat(data.usersAtRisk, "Users at risk", UserX)}
    {@render stat(
      data.averageReflectionQuality,
      "Average reflection Quality",
      Star
    )}
    {@render stat((23).toString(), "Learning Streaks", Flame)}
  </div>
  <DataTable {columns} data={data.value} />
</main>
