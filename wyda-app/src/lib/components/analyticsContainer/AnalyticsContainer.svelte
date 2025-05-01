<script>
  import WydaAdmin from "$lib/analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "$lib/analyticsViews/ClientAdmin.svelte";
  import Learner from "$lib/analyticsViews/Learner.svelte";
  import LearningCoach from "$lib/analyticsViews/LearningCoach.svelte";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import { Label } from "$lib/components/ui/label";
  let role = "learner";
</script>

<!-- NOTE: roles are to be sourced from JWT Tokens in final product -->
<div class="dashboard flex flex-col items-center justify-start w-full">
  <div class="view-switcher h-[12em] w-[12em] flex justify-center mb-12 mt-8">
    <RadioGroup.Root bind:value={role}>
      <p class="text-center">Temporary View Switcher</p>
      <div class="flex items-center space-x-2">
        <RadioGroup.Item value="learner" id="r1" />
        <Label for="r1">Learner View</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroup.Item value="wydaAdmin" id="r2" />
        <Label for="r2">Wyda Admin View</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroup.Item value="clientAdmin" id="r3" />
        <Label for="r3">Client Admin View</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroup.Item value="learningCoach" id="r4" />
        <Label for="r4">Learning Coach View</Label>
      </div>
    </RadioGroup.Root>
  </div>
  {#if role == "learner"}
    <Learner />
  {:else if role == "wydaAdmin"}
    <WydaAdmin />
  {:else if role == "clientAdmin"}
    <ClientAdmin />
  {:else if role == "learningCoach"}
    <LearningCoach />
  {/if}
</div>
