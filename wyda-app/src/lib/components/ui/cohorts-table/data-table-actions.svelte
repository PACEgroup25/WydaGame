<script lang="ts">
  import Ellipsis from "@lucide/svelte/icons/ellipsis";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import DropdownMenuSeparator from "$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte";
  import { goto } from "$app/navigation";

  let { id }: { id: string } = $props();
  console.log(id);
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="ghost"
        size="icon"
        class="relative size-8 p-0"
      >
        <span class="sr-only">Open menu</span>
        <Ellipsis />
      </Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.GroupHeading>Actions</DropdownMenu.GroupHeading>
      <DropdownMenuSeparator />
      <DropdownMenu.Item onclick={()=> goto("/learning-coach/learner-support/learner-profile/" + id)}>Learner Profile</DropdownMenu.Item>
      <DropdownMenu.Item>Learner Analytics</DropdownMenu.Item>
      <DropdownMenu.Item>Learner Workshops</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
