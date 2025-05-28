<script>
  import { Button } from "$lib/components/ui/button/index.js";
  import X from "@lucide/svelte/icons/x";
  let { columnData = $bindable(), columnFilters } = $props();
  console.log(columnData.name + " tag created");

  function valueIndex() {
    for (var i = 0; i < columnFilters.length; i++) {
      if (columnFilters[i].id == columnData.id) {
        console.log("value found");
        return columnFilters[i].value;
      }
    }
    console.log("value not found returning first:");
    return columnFilters[0].value;
  }
</script>

{#if columnData.filterActive}
  <Button
    variant="outline"
    onclick={() => {
      columnData.filterActive = false;
      columnData.column.setFilterValue(undefined);
    }}
  >
    {columnData.name} = {valueIndex()}
    <X />
  </Button>
{/if}
