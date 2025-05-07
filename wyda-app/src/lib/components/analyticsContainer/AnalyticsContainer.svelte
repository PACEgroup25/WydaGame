<script>
  import WydaAdmin from "$lib/analyticsViews/WydaAdmin.svelte";
  import ClientAdmin from "$lib/analyticsViews/ClientAdmin.svelte";
  import LearningCoach from "$lib/analyticsViews/LearningCoach.svelte";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import { Label } from "$lib/components/ui/label";
  let role = "learner";
</script>

<!-- NOTE: roles are to be sourced from JWT Tokens in final product -->
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
<a href="/learningCoach" class="underline">link to learning coach view</a>
{#if role == "learner"}
  <LearningCoach />
{:else if role == "wydaAdmin"}
  <WydaAdmin />
{:else if role == "clientAdmin"}
  <ClientAdmin />
{:else if role == "learningCoach"}
  <LearningCoach />
{/if}
