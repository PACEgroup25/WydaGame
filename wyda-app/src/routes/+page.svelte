<script>
  import WydaAdmin from "../analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "../analyticsViews/ClientAdmin.svelte";
  import Learner from "../analyticsViews/Learner.svelte";
  import LearningCoach from "../analyticsViews/LearningCoach.svelte";
  import { Button } from "../lib/components/ui/button";
  let roles = ["wydaAdmin", "clientAdmin", "learner", "learningCoach"];
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
      <div class="profile-container">
        <div class="image-container">JD</div>
        <div class="text-container">John Doe</div>
      </div>
      <div class="actions-container">
        <Button variant="sidebar">Sign out</Button>
        <Button variant="sidebar">Notifications</Button>
      </div>
    </div>
    <div class="dashboard">
      <p>Dashboard Space</p>
    </div>
  </div>
</main>

<style>
  .navigation-container {
    background-color: #f0f2f6;
    border-right: solid 1px;
    border-color: rgb(215, 215, 215);
    height: 100dvh;
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
    height: 80%;
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
</style>
