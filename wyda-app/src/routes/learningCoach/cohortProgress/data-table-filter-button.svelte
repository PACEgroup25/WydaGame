<script lang="ts">
  import Funnel from "@lucide/svelte/icons/funnel";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
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
      <DropdownMenu.GroupHeading>Actions</DropdownMenu.GroupHeading>
      <DropdownMenu.Item onclick={() => navigator.clipboard.writeText(id)}>
        Learner Profile
      </DropdownMenu.Item>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>Learner Statistics</DropdownMenu.Item>
    <DropdownMenu.Item>Learner Workshops</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
