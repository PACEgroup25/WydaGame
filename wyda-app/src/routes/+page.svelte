<script>
  import WydaAdmin from "../analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "../analyticsViews/ClientAdmin.svelte";
  import Learner from "../analyticsViews/Learner.svelte";
  import LearningCoach from "../analyticsViews/LearningCoach.svelte";
  import { Button } from "../lib/components/ui/button";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import { Label } from "$lib/components/ui/label";
  let role = "learner";
</script>

<main>
  <div class="page-container flex flex-row">
    <div
      class="navigation-container bg-[#f0f2f6] border-r border-r-grayBorder h-100dvh flex flex-col"
    >
      <div class="logo-container flex flex-row justify-center mt-4 mb-4">
        <img src="/full_logo.png" alt="wyda-logo" class="h-7" />
      </div>
      <div class="locations-container flex flex-col h-full">
        <Button variant="sidebar" class="m-1 hover:bg-[#b4dedd]"
          >Dashboard</Button
        >
        <Button variant="sidebar" class="m-1 hover:bg-[#b4dedd]">Help</Button>
        <Button variant="sidebar" class="m-1 hover:bg-[#b4dedd]"
          >Analytics</Button
        >
        <div class="view-switcher flex justify-center mb-12 mt-8">
          <RadioGroup.Root bind:value={role}>
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="learner" id="r1" />
              <Label for="r1">Learner View</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="wydaAdmin" id="r2" />
              <Label for="r2">Wyda Admin View</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="clientAdmin" id="r3" />
              <Label for="r3">Client Admin View</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="learningCoach" id="r4" />
              <Label for="r4">Learning Coach View</Label>
            </div>
            <RadioGroup.Input name="spacing" />
          </RadioGroup.Root>
        </div>
      </div>
      <div class="profile-container flex justify-evenly mb-12">
        <div class="image-container">JD</div>
        <div class="text-container">John Doe</div>
      </div>
      <div class="actions-container flex">
        <Button variant="sidebar">Sign out</Button>
        <Button variant="sidebar">Notifications</Button>
      </div>
    </div>
    <!-- NOTE: roles are to be sourced from JWT Tokens in final product -->
    <div class="dashboard flex align-center justify-center h-100dvh w-full">
      {#if role == "learner"}
        <Learner />
      {:else if role == "wydaAdmin"}
        <WydaAdmin />
      {:else if role == "clientAdmin"}
        <ClientAdmin />
      {:else if role == "learningCoach"}
        <LearningCoach />
      {/if}
    </div>
  </div>
</main>

<style>
</style>
