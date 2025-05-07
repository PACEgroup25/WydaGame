<script>
  import SideBarLearningCoach from "%lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import LearningCoach from "%lib/analyticsViews/LearningCoach.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard">
      <LearningCoach />
    </div>
  </div>
</main>

<style>
</style>
