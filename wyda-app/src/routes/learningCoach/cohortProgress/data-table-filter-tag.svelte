<script>
  import { Button } from "$lib/components/ui/button/index.js";
  import X from "@lucide/svelte/icons/x"
  let { columnData, columnFilters } = $props();
</script>

{#if columnData.filterActive}
  <Button
    variant="outline"
    onclick={() => {
      columnData.filterActive = false;
      columnData.column.setFilterValue(undefined);
    }}
  >
    {columnFilters[0].id} = {columnFilters[0].value}
    <X/>
  </Button>
{/if}
