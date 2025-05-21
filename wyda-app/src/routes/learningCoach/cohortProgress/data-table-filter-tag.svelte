<script>
  import { Button } from "$lib/components/ui/button/index.js";
  let { column, columnFilters } = $props();
  console.log(columnFilters);
  let columnName = $derived(columnFilters[0]?.id);
  let columnValue = $derived(columnFilters[0]?.value);
</script>

<Button
  variant="outline"
  onclick={() => {
    column.setFilterValue(undefined);
  }}
>
  {columnName} = {columnValue}
</Button>
