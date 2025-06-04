<script lang="ts">
  import Button from "../button/button.svelte";
  import {
    Home,
    ChartColumnIncreasing,
    Clock,
    BookOpenCheck,
    CalendarDays,
    ChartNoAxesCombined,
    ClipboardPlus,
  } from "@lucide/svelte";

  import { page } from "$app/state";
  let currentPath = $derived(page.url.pathname);

  // import { roleChange } from "./roleChange.ts";

  async function handleRoleChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;

    if (!target) return;
    const role = target.value;

    // roleChange(role);

    // function handleRoleChange(event: Event) {
    //   const target = event.target as HTMLSelectElement | null;

    //   if (!target) return;

    //   const role = target.value;

    if (role === "Learner") location.href = "/learner/dashboard";
    else if (role === "Learning Coach") location.href = "/learning-coach";
    else if (role === "Client Admin") location.href = "/client-admin";
    else if (role === "Wyda Admin") location.href = "/wyda-admin";
  }
</script>

<div
  class="navigation-container w-60 bg-[#494A4A] border-r border-r-greyBorder h-dvh flex flex-col sticky top-0"
>
  <div class="locations-container flex flex-col h-full mt-8 mb-4 gap-y-2">
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach"
      class="m-1 flex justify-start {currentPath === '/learning-coach'
        ? 'bg-[#676969]'
        : 'bg-transparent'}"
    >
      <Home />
      <span>Home</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/cohort-progress"
      class="m-1 flex justify-start {currentPath.includes(
        '/learning-coach/cohort-progress'
      )
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ChartColumnIncreasing />
      <span>Cohort Progress</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/learner-support"
      class="m-1 flex justify-start {currentPath.includes(
        '/learning-coach/learner-support'
      )
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <BookOpenCheck />
      <span>Learner Support</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/analytics"
      class="m-1 flex justify-start {currentPath.includes(
        '/learning-coach/analytics'
      )
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ChartNoAxesCombined />
      <span>Analytics</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/reports"
      class="m-1 flex justify-start {currentPath.includes(
        '/learning-coach/reports'
      )
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ClipboardPlus />
      <span>Reports</span>
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
        <!-- <option>Client Admin</option> -->
      </select>
    </div>
  </div>
</div>
