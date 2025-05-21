<script lang="ts">
  import { Funnel } from "lucide-svelte";
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import type { Column } from "@tanstack/table-core";
  let { data } = $props();
  let filterValue = $state("");


  function applyFilter<TData,TValue>(column : Column<TData,TValue>, filterValue : string) {
    data.reflectionQualityFilterActive = true;
    column.setFilterValue(Number(filterValue));
    filterValue = "";
  }
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="ghost" size="icon" class="relative size-8 bg-[#f5f5f5]">
      <span class="sr-only">Open menu</span>
      <Funnel />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.GroupHeading>Add Filter</DropdownMenu.GroupHeading>
      <DropdownMenuSeparator />
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>Reflection Quality</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent class="grid gap-2 p-4">
          <Label>Filter Value</Label>
          <Input bind:value={filterValue} />
          <!-- on click take the column and apply the filter and create a filter active component -->
          <Button
            variant="outline"
            onclick={() => {
              applyFilter(data.reflectionQuality, filterValue);
            }}>Apply Filter</Button
          >
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>Date</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>test content</DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
