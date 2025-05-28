<script lang="ts">
  let { children } = $props();
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
    {@render children()}
  </div>
</main>
