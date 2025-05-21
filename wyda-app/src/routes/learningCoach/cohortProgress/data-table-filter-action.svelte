<script>
  import { Button } from "$lib/components/ui/button/index.js";
  import Label from "$lib/components/ui/label/label.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  let { data } = $props();
  let filterValue = $state("");

  function applyFilter(data, filterValue) {
    data.filterActive = true;
    data.column.setFilterValue(Number(filterValue));
    filterValue = "";
  }
</script>

<div class="grid gap-2">
  <Label>Filter Value</Label>
  <!-- TODO: should change input based on what column -->
  <Input bind:value={filterValue} />
  <Button
    variant="outline"
    onclick={() => {
      applyFilter(data, filterValue);
    }}
  >
    Apply Filter
  </Button>
</div>
