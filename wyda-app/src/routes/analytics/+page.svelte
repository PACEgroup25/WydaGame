<script>
  import AnalyticsContainer from "%lib/components/analyticsContainer/AnalyticsContainer.svelte";
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
    <div class="dashboard">
      <AnalyticsContainer />
    </div>
  </div>
</main>

<style>
</style>
