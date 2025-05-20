<script>
  import { Button } from "$lib/components/ui/button/index.js";
  let { column, columnFilters } = $props();
</script>

<Button
  variant="outline"
  onclick={() => {
    column.setFilterValue(undefined);
  }}
>
  {column.name} = {columnFilters}
</Button>
