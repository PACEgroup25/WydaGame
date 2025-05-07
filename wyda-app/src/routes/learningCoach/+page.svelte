<script>
  import SideBarLearningCoach from "%lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import CohortProgressSummary from "%lib/components/ui/cohort-progress-summary/cohortProgressSummary.svelte"
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard">
      <CohortProgressSummary />
    </div>
  </div>
</main>

<style>
</style>
