<script>
  let { data } = $props();
  import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach></SideBarLearningCoach>
    <div>you are on a slug page for recentActivity userid:{data.userId}</div>
  </div>
</main>
