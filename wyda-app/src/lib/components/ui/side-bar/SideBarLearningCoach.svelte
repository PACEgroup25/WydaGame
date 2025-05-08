<script>
  import Button from "../button/button.svelte";
  import {
    LayoutDashboard,
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
  } from "@lucide/svelte";

  import { page } from "$app/state";
  let currentPath = $derived(page.url.pathname);
</script>

<div
  class="navigation-container bg-[#2e2e2e] border-r border-r-greyBorder h-dvh flex flex-col sticky top-0"
>
  <div
    class="logo-container flex flex-row justify-center bg-[#f0f2f6] pt-4 pb-4"
  >
    <img src="/full_logo.png" alt="wyda-logo" class="h-7 bg-[#f0f2f6]" />
  </div>
  <div class="locations-container flex flex-col h-full mt-8 mb-4">
    <Button
      variant="sidebarLearningCoach"
      href="/learningCoach"
      class="m-1 flex justify-start {currentPath === '/learningCoach'
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <LayoutDashboard/>
      <span>Dashboard</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learningCoach/cohortProgress"
      class="m-1 flex justify-start {currentPath === '/cohortProgress'
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ChartColumnIncreasing />
      <span>Cohort Progress</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learningCoach/recentActivity"
      class="m-1 flex justify-start {currentPath === '/recentActivity'
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <Clock />
      <span>Recent Activity</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/"
      class="m-1 flex justify-start {currentPath === '/'
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <BookOpenCheck />
      <span>Learner Support</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/"
      class="m-1 flex justify-start {currentPath === '/'
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <CalendarDays />
      <span>Workshops</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/learningCoach/analytics"
      class="m-1 flex justify-start {currentPath === '/learningCoach/analytics'
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ChartNoAxesCombined />
      <span>Analytics</span>
    </Button>
    <Button
      variant="sidebarLearningCoach"
      href="/"
      class="m-1 flex justify-start {currentPath === '/'
        ? 'bg-[#1b5d74]'
        : 'bg-transparent'}"
    >
      <ClipboardPlus />
      <span>Reports</span>
    </Button>
  </div>
  <div class="profile-container flex justify-evenly mb-4">
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
  </div>
</div>
