<script lang="ts">
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col gap-10">
  <div class="text-4xl font-semibold">
    User Analytics
  </div>
  <div class="flex top-row gap-10">
    <div class="bg-red-100 score-container">
      score-container
    </div>
    <div class="bg-blue-100 reflection-qual">
      reflection-qual
    </div>
    <div class="bg-yellow-100 avg-time">
      avg-time
    </div>
  </div>
  <div class="section-1 flex gap-10">
    <div class="bg-green-100 percentages">
      percentages
    </div>
    <div class="bg-purple-100 performances">
      performances
    </div>
  </div>
</div>