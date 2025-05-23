<script lang="ts">
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
  import LearnerDashboard from "$lib/components/ui/learner-dashboard/learnerDashboard.svelte";
  let { data } = $props();
  console.log(data);
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
    <LearnerDashboard />
  </div>
</main>

<style>
</style>
