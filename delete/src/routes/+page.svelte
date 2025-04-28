<script>
  import WydaAdmin from "../analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "../analyticsViews/ClientAdmin.svelte";
  import Learner from "../analyticsViews/Learner.svelte";
  import LearningCoach from "../analyticsViews/LearningCoach.svelte";
  import Button from "@/components/ui/button/button.svelte";
  let roles = ["wydaAdmin", "clientAdmin", "learner", "learningCoach"];
</script>

<main>
  <div class="page-container">
    <div class="navigation-container">
      <div class="logo-container">
        <img src="/full_logo.png" alt="wyda-logo" height="80%" />
      </div>
      <div class="locations-container"></div>
      <Button>hello</Button>
      <div class="profile-container"></div>
      <div class="actions-container"></div>
    </div>
    <div class="dashboard">
      <p>Dashboard Space</p>
    </div>
  </div>
</main>

<style lang="postcss">
  @reference "tailwindcss";

  .navigation-container {
    background-color: #f0f2f6;
  }

  .page-container {
    display: flex;
    flex-direction: row;
  }

  .logo-container {
    justify-content: center;
    align-items: center;
    margin-inline-start: 1em;
    margin-top: 1em;
  }

  .dashboard {
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navigation-container {
    width: 200px;
    height: 100dvh;
    display: flex;
    flex-direction: column;
  }
</style>
