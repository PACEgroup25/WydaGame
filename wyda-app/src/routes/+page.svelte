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
      class="navigation-container bg-[#f0f2f6] border-r border-r-greyBorder h-100dvh flex flex-col"
    >
      <div class="logo-container flex flex-row justify-center mt-4 mb-4">
        <img src="/full_logo.png" alt="wyda-logo" class="h-7" />
      </div>
      <div class="locations-container flex flex-col h-full mt-12 mb-4">
        <Button variant="sidebar" class="m-1">Dashboard</Button>
        <Button variant="sidebar" class="m-1">Help</Button>
        <Button variant="sidebar" class="m-1">Analytics</Button>
        <div class="view-switcher flex justify-center mb-12 mt-8">
          <RadioGroup.Root bind:value={role}>
            <p>Temporary View Switcher</p>
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
          </RadioGroup.Root>
        </div>
      </div>
      <div class="profile-container flex justify-evenly mb-8">
        <div
          class="image-container flex justify-center items-center h-12 w-12 bg-blue-500 rounded-full"
        >
          JD
        </div>
        <div class="text-container flex items-center">John Doe</div>
      </div>
      <div class="actions-container flex mb-12">
        <Button variant="sidebar" class="m-1">Sign out</Button>
        <Button variant="sidebar" class="m-1">Notifications</Button>
      </div>
    </div>
    <!-- NOTE: roles are to be sourced from JWT Tokens in final product -->
    <div class="dashboard flex items-center justify-center h-100dvh w-full">
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
