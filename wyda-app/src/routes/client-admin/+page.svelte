<script lang="ts">
    import SideBarAdmin from "$lib/components/ui/side-bar/SideBarAdmin.svelte";
    import Chart from "$lib/components/ui/chart/chart.svelte";
    import { Users, Layers, Star, BarChart3 } from "@lucide/svelte";
  
    const metrics = [
      {
        label: "Active Learners",
        value: 328,
        icon: Users,
        color: "bg-blue-100 text-blue-700"
      },
      {
        label: "Active Cohorts",
        value: 12,
        icon: Layers,
        color: "bg-green-100 text-green-700"
      },
      {
        label: "Reflection Quality",
        value: "High",
        icon: Star,
        color: "bg-yellow-100 text-yellow-700"
      },
      {
        label: "Engagement Rate",
        value: "86%",
        icon: BarChart3,
        color: "bg-purple-100 text-purple-700"
      }
    ];
  
    const levelCompletionChart = {
      chartLabel: "Level Completion (%) from Total Users",
      type: "pie",
      labels: ["Onboarding Activities", "N/A", "Profitability"],
      data: [79, 66, 32],
      backgroundColor: [
        "rgba(94, 234, 212, 1)",
        "rgba(59, 130, 246, 1)",
        "rgba(167, 243, 208, 1)"
      ]
    };
  
    const milestoneChart = {
      chartLabel: "Cohort Milestone on Track",
      type: "doughnut",
      labels: ["On Track"],
      data: [6],
      backgroundColor: ["rgba(94, 234, 212, 1)"]
    };
  </script>
  
  <div class="flex min-h-screen bg-gray-50">
    <SideBarAdmin />
  
    <div class="flex-grow px-8 py-10">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-800">Welcome, Admin</h1>
        <p class="text-gray-600 mt-2">Here's an overview of your learning cohorts and engagement.</p>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {#each metrics as metric}
          <div class="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class={`p-3 rounded-full ${metric.color}`}>
              <svelte:component this={metric.icon} class="w-6 h-6" />
            </div>
            <div>
              <div class="text-sm text-gray-500">{metric.label}</div>
              <div class="text-2xl font-semibold text-gray-800">{metric.value}</div>
            </div>
          </div>
        {/each}
      </div>
  
      <!-- Charts side by side -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <Chart {...levelCompletionChart} />
        </div>
        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          <Chart {...milestoneChart} />
        </div>
      </div>
    </div>
  </div>
  