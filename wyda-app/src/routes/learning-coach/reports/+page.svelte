<script lang="ts">
    import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  
    let reports = [
      { name: "Progress Overview", exportable: true },
      { name: "Check-In Workshop Planning", exportable: true },
      { name: "Wrap-Up Planning Report", exportable: true },
      { name: "Engagement Analysis", exportable: true },
      { name: "Top 3 Scorers", exportable: true },
      { name: "Individual Progress Report", exportable: true },
      { name: "Completion Percentage", exportable: true },
      { name: "Cohort Milestone On Track", exportable: true }
    ];
  </script>
  
 
 
  
  <div class="main-container flex gap-10 mt-10">
    <div class="w-full max-w-5xl mx-auto px-4">
      <div class="text-4xl font-bold mb-4">Reports</div>
  
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

  
  <style>
    
  </style>
  