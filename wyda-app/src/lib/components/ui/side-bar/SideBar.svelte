<script>
  import Button from "../button/button.svelte";
  import {
    LayoutDashboard,
    ChartLine,
    LogOut,
    Bell,
    Info,
  } from "@lucide/svelte";
</script>

<div
  class="navigation-container bg-[#f0f2f6] border-r border-r-greyBorder h-100dvh flex flex-col"
>
  <div class="logo-container flex flex-row justify-center mt-4 mb-4">
    <img src="/full_logo.png" alt="wyda-logo" class="h-7" />
  </div>
  <div class="locations-container flex flex-col h-full mt-8 mb-4">
    <Button variant="sidebar" href="/" class="m-1 flex justify-start">
      <LayoutDashboard />
      <span>Dashboard</span>
    </Button>
    <Button variant="sidebar" class="m-1 flex justify-start">
      <Info />
      <span>Help</span>
    </Button>
    <Button variant="sidebar" href="/analytics" class="m-1 flex justify-start">
      <ChartLine />
      <span>Analytics</span>
    </Button>
  </div>
  <div class="profile-container flex justify-evenly mb-4">
    <div
      class="image-container flex justify-center items-center h-12 w-12 bg-blue-500 rounded-full"
    >
      JD
    </div>
    <div class="text-container flex items-center">John Doe</div>
  </div>
  <div
    class="actions-container flex justify-evenly border-t border-t-greyBorder"
  >
    <Button variant="sidebar" class="m-1 w-[6em]"><LogOut /></Button>
    <Button variant="sidebar" class="m-1 w-[6em]"><Bell /></Button>
  </div>
</div>
