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
  <div class="page-container">
    <div class="navigation-container">
      <div class="logo-container">
        <img src="/full_logo.png" alt="wyda-logo" class="h-7" />
      </div>
      <div class="locations-container">
        <Button variant="sidebar" class="m-1 hover:bg-[#b4dedd]"
          >Dashboard</Button
        >
        <Button variant="sidebar" class="m-1 hover:bg-[#b4dedd]">Help</Button>
        <Button
          variant="sidebar"
          class="m-1 hover:bg-[#b4dedd] focus:outline-2 focus:outline-[#000]"
          >Analytics</Button
        >
      </div>
      <div class="view-switcher">
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
      <div class="profile-container">
        <div class="image-container">JD</div>
        <div class="text-container">John Doe</div>
      </div>
      <div class="actions-container">
        <Button variant="sidebar">Sign out</Button>
        <Button variant="sidebar">Notifications</Button>
      </div>
    </div>
    <!-- NOTE: roles are to be sourced from JWT Tokens in final product -->
    <div class="dashboard">
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
  .navigation-container {
    background-color: #f0f2f6;
    border-right: solid 1px;
    border-color: rgb(215, 215, 215);
    height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  .page-container {
    display: flex;
    flex-direction: row;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .locations-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .dashboard {
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-container {
    display: flex;
    justify-content: space-evenly;
  }

  .actions-container {
    display: flex;
  }

  .view-switcher {
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
  }
</style>
