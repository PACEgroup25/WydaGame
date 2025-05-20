<script lang="ts">
  import { Funnel } from "lucide-svelte";
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  let { columns } = $props();
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
        <DropdownMenu.SubTrigger>Cohort</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <Input />
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
