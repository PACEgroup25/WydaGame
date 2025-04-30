<script>
  import WydaAdmin from "$lib/analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "$lib/analyticsViews/ClientAdmin.svelte";
  import Learner from "$lib/analyticsViews/Learner.svelte";
  import LearningCoach from "$lib/analyticsViews/LearningCoach.svelte";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import { Button } from "$lib/components/ui/button";
  import { Label } from "$lib/components/ui/label";
  let role = "learner";
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
  </div>
</main>

<style>
</style>
