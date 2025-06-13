<script lang="ts">
  let { children } = $props();
  import { Toaster } from "$lib/components/ui/sonner/index.js";
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
</script>

<Toaster />
<main>
  <div class="page-container flex flex-row">
    <SideBar />
    <div class="dashboard">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        {@render children()}
      </div>
    </div>
  </div>
</main>
