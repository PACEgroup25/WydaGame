<script>
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
  let { data } = $props();
  console.log(data);
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
    <div class="dashboard">

    </div>
  </div>
</main>

<style>
</style>
