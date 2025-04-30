<script>
  import AnalyticsContainer from "%lib/components/analyticsContainer/AnalyticsContainer.svelte";
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
    <!-- NOTE: roles are to be sourced from JWT Tokens in final product -->
    <AnalyticsContainer />
  </div>
</main>

<style>
</style>
