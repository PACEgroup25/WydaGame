<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Label from "$lib/components/ui/label/label.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  let { data } = $props();
  let filterValue = $state("");

  function applyFilter(data: any, filterValue: any) {
    data.filterActive = true;
    if (data.column.id == "reflectionQuality") {
      data.column.setFilterValue(Number(filterValue));
    } else {
      data.column.setFilterValue(filterValue);
    }
    filterValue = "";
  }

  //if status, then use select
  //if reflection quality use number
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
