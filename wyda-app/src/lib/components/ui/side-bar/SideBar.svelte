<script lang="ts">
  import Button from "../button/button.svelte";
  import {
    Home,
    ChartNoAxesCombined,
    Clock,
    Info,
    ClipboardPlus,
  } from "@lucide/svelte";

  import { page } from "$app/state";
  let currentPath = $derived(page.url.pathname);

  // import { roleChange } from "./roleChange.ts"

  async function handleRoleChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;

    if (!target) return;
    const role = target.value;

    // roleChange(role);
  }
</script>

<div
  class="navigation-container w-60 bg-[#494A4A] border-r border-r-greyBorder h-dvh flex flex-col sticky top-0"
>
  <div class="locations-container flex flex-col h-full mt-8 mb-4 gap-y-2">
    <Button
      variant="sidebarLearningCoach"
      href="/learner/dashboard"
      class="m-1 flex justify-start {currentPath === '/learner'
        ? 'bg-[#676969]'
        : 'bg-transparent'}"
    >
      <Home />
      <span>Home</span>
    </Button>

    <Button
      variant="sidebarLearningCoach"
      href="/learner/recent-activity"
      class="m-1 flex justify-start {currentPath.includes(
        '/learner/recent-activity'
      )
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <Clock />
      <span>Recent Activity</span>
    </Button>

    <Button
      variant="sidebarLearningCoach"
      href="/learner/analytics"
      class="m-1 flex justify-start {currentPath.includes('/learner/analytics')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ChartNoAxesCombined />
      <span>Analytics</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learner/reports"
      class="m-1 flex justify-start {currentPath.includes('/learner/reports')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ClipboardPlus />
      <span>Reports</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learner/help"
      class="m-1 flex justify-start {currentPath.includes('/learner/help')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <Info />
      <span>Help</span>
    </Button>

    <div
      class="mt-auto pt-4 mb-8 border-t border-gray-600 flex flex-col items-center"
    >
      <label
        for="role-switcher"
        class="block text-sm font-semibold text-white mb-2 text-center"
      >
      </label>
      <select
        id="role-switcher"
        onchange={handleRoleChange}
        class="w-30 bg-gray-100 text-black font-medium rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option disabled selected>Switch View</option>
        <option>Learner</option>
        <option>Learning Coach</option>
        <option>Client Admin</option>
      </select>
    </div>
  </div>
</div>
