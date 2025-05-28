<script lang="ts">
  let { children } = $props();
  import { Toaster } from "$lib/components/ui/sonner/index.js";
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
</script>

<Toaster />
<main>
  <div class="page-container flex flex-row">
    <SideBar />
    {@render children()}
  </div>
</main>
