<script lang="ts">
  import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBar.svelte"; 

  let recentActivities = [
    {
      level: "3.1 - Prioritising Customers",
      date: "2025-05-28 10:45 AM",
      status: "Completed",
      reflectionQuality: "High"
    },
    {
      level: "3.2 - Team Management",
      date: "2025-05-27 4:30 PM",
      status: "In Progress",
      reflectionQuality: "N/A"
    },
    {
      level: "2.2 - Decision Making",
      date: "2025-05-26 2:15 PM",
      status: "Completed",
      reflectionQuality: "Low"
    }
  ];
</script>

<div class="flex min-h-screen">
  <!-- Sidebar -->
  <SideBarLearningCoach />

  <!-- Main content -->
  <div class="flex-grow px-8 py-6">
    <h1 class="text-3xl font-bold mb-4">Recent Activity</h1>

    <div class="space-y-4">
      {#each recentActivities as activity}
        <div class="border p-4 rounded shadow-sm bg-white">
          <div class="flex justify-between items-center mb-2">
            <div class="text-lg font-semibold">{activity.level}</div>
            <div class="text-sm text-gray-500">{activity.date}</div>
          </div>
          <div class="flex justify-between text-sm text-gray-700">
            <div>Status: <span class="font-medium">{activity.status}</span></div>
            <div>Reflection: <span class="font-medium">{activity.reflectionQuality}</span></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
