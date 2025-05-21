<script lang="ts">
  import { Funnel } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
  import DropdownMenuSubContent from "$lib/components/ui/dropdown-menu/dropdown-menu-sub-content.svelte";
  import FilterAction from "./data-table-filter-action.svelte"
  let { filterColumns } = $props();
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
        {#each filterColumns as filterColumn}
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>{filterColumn.name}</DropdownMenu.SubTrigger>
          <DropdownMenuSubContent class = "grid gap-2 p-4">
              <FilterAction data={filterColumn}/>
          </DropdownMenuSubContent>
        </DropdownMenu.Sub>
        {/each}
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
