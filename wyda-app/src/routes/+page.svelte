<script>
  import WydaAdmin from "../analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "../analyticsViews/ClientAdmin.svelte";
  import Learner from "../analyticsViews/Learner.svelte";
  import LearningCoach from "../analyticsViews/LearningCoach.svelte";
  import { Button } from "../lib/components/ui/button";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import { Label } from "$lib/components/ui/label";
  let role = "learner";
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
    <!-- NOTE: roles are to be sourced from JWT Tokens in final product -->
    <div class="dashboard flex items-center justify-center h-100dvh w-full">
      <div class="view-switcher flex justify-center mb-12 mt-8">
        <RadioGroup.Root bind:value={role}>
          <p class="text-center">Temporary View Switcher</p>
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
