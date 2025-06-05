<script lang="ts">
  import ArrowUpDown from "@lucide/svelte/icons/arrow-up-down";
  import ArrowDown from "@lucide/svelte/icons/arrow-down";
  import ArrowUp from "@lucide/svelte/icons/arrow-up";
  import { Button } from "$lib/components/ui/button/index.js";

  let { column } = $props();
  let sort = $derived(column.getIsSorted().toString());
</script>

<Button
  variant="ghost"
  onclick={() => {
    column.toggleSorting();
    console.log(sort);
  }}
  class="flex justify-around"
>
  <span>No of Students</span>
  {#if sort === "false"}
    <ArrowUpDown class="ml-2" />
  {:else if sort == "asc"}
    <ArrowUp class="ml-2" />
  {:else}
    <ArrowDown class="ml-2" />
  {/if}
</Button>
