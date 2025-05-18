<script lang="ts">
  import Funnel from "@lucide/svelte/icons/funnel";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="ghost" size="icon" class="relative size-8 p-0">
      <span class="sr-only">Open menu</span>
      <Funnel />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.GroupHeading>Filter By</DropdownMenu.GroupHeading>
      <DropdownMenuSeparator />
      <DropdownMenu.Item>Cohort</DropdownMenu.Item>
      <DropdownMenu.Item>Reflection Quality</DropdownMenu.Item>
      <DropdownMenu.Item>Date</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
