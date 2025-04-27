<script>
  import WydaAdmin from "../analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "../analyticsViews/ClientAdmin.svelte";
  import Learner from "../analyticsViews/Learner.svelte";
  import LearningCoach from "../analyticsViews/LearningCoach.svelte";
  let roles = ["wydaAdmin", "clientAdmin", "learner", "learningCoach"];
</script>

<main>
  <p>test</p>
  <div class="navigation-container">
    <div class="logo-container"></div>
    <div class="locations-container"></div>
    <div class="profile-container"></div>
    <div class="actions-container"></div>
  </div>
  <div class="dashboard"></div>
</main>
