<script>
  import SideBarLearningCoach from "%lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import LearningCoach from "%lib/analyticsViews/LearningCoach.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard flex flex-col items-center justify-start w-full">
      <LearningCoach />
    </div>
  </div>
</main>

<style>
</style>
