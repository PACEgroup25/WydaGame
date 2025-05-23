<script lang="ts">
  import Button from "../button/button.svelte";
  import {
    Home,
    ChartLine,
    LogOut,
    Bell,
    Info,
    ChartColumnIncreasing,
    Clock,
    BookOpenCheck,
    CalendarDays,
    ChartNoAxesCombined,
    ClipboardPlus,
    UserCircle
  } from "@lucide/svelte";

  import { page } from "$app/state";
  let currentPath = $derived(page.url.pathname);

  function handleRoleChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;

    if (!target) return;

    const role = target.value;

    if (role === 'Learner') location.href = '/learner';
    else if (role === 'Learning Coach') location.href = '/learning-coach';
    else if (role === 'Client Admin') location.href = '/client-admin';
    else if (role === 'Wyda Admin') location.href = '/wyda-admin';
  }
</script>

<div
  class="navigation-container w-60 bg-[#494A4A] border-r border-r-greyBorder h-dvh flex flex-col sticky top-0"
>
  <!-- <div
    class="logo-container flex flex-row justify-center bg-[#f0f2f6] pt-4 pb-4"
  >
    <img src="/full_logo.png" alt="wyda-logo" class="h-7 bg-[#f0f2f6]" />
  </div> -->


  <div class="locations-container flex flex-col h-full mt-8 mb-4 gap-y-2">
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach"
      class="m-1 flex justify-start {currentPath === "/learning-coach"
        ? 'bg-[#676969]'
        : 'bg-transparent'}"
    >
      <Home />
      <span>Home</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/cohort-progress"
      class="m-1 flex justify-start {currentPath.includes('/learning-coach/cohort-progress')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ChartColumnIncreasing />
      <span>Cohort Progress</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/recent-activity"
      class="m-1 flex justify-start {currentPath.includes('/learning-coach/recent-activity')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <Clock />
      <span>Recent Activity</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/learner-support"
      class="m-1 flex justify-start {currentPath.includes('/learning-coach/learner-support')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <BookOpenCheck />
      <span>Learner Support</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/workshops"
      class="m-1 flex justify-start {currentPath.includes('/learning-coach/workshops')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <CalendarDays />
      <span>Workshops</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/analytics"
      class="m-1 flex justify-start {currentPath.includes('/learning-coach/analytics')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ChartNoAxesCombined />
      <span>Analytics</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learning-coach/reports"
      class="m-1 flex justify-start {currentPath.includes('/learning-coach/reports')
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ClipboardPlus />
      <span>Reports</span>
    </Button>
    

    <div class="mt-auto pt-4 mb-8 border-t border-gray-600 flex flex-col items-center">
      <label for="role-switcher" class="block text-sm font-semibold text-white mb-2 text-center">
       
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
        <option>Wyda Admin</option>
      </select>
    </div>

  </div>
  
  <!--<div class="profile-container flex justify-evenly mb-4">
    <div
      class="image-container flex justify-center items-center h-12 w-12 bg-blue-500 rounded-full"
    >
      EU
    </div>
    <div class="text-container flex items-center text-[#f0f2f6]">
      Example User
    </div>
  </div> 
  <div
    class="actions-container flex justify-evenly border-t border-t-greyBorder"
  >
    <Button variant="sidebarLearningCoach" href="/" class="m-1 w-[6em]"
      ><LogOut /></Button
    >
    <Button variant="sidebarLearningCoach" class="m-1 w-[6em]"><Bell /></Button>
  </div>  -->
</div>
