<script lang="ts">
  import SideBarAdmin from "$lib/components/ui/side-bar/SideBarAdmin.svelte";

  let reports = [
    { name: "Progress Overview", exportable: true },
    { name: "Engagement Analysis", exportable: true },
    { name: "Top 3 Scorers", exportable: true },
    { name: "Individual Progress Report", exportable: true },
    { name: "Completion Percentage", exportable: true },
    { name: "Cohort Milestone On Track", exportable: true }
  ];
</script>

<div class="flex min-h-screen bg-gray-50">
  <!-- Sidebar -->
  <SideBarAdmin />

  <!-- Main Content -->
  <div class="flex-grow px-8 py-10">
    <div class="text-4xl font-bold mb-8">Reports</div>

    <div class="flex flex-col gap-4">
      {#each reports as report}
        <div class="w-full flex items-center justify-between border p-6 rounded-lg shadow-sm bg-white">
          <div class="text-lg font-semibold">{report.name}</div>
          <button class="px-4 py-2 bg-[#1b5d74] text-white text-sm rounded hover:bg-[#174e62] transition">
            View Full Report
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>
