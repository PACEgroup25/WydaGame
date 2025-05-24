<script lang="ts">
    import SideBarAdmin from "$lib/components/ui/side-bar/SideBarAdmin.svelte";
    import Chart from "$lib/components/ui/chart/chart.svelte";
  
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
  
    const scenarioCompletionChart = {
      chartLabel: "Scenario Completion (%) from Total Users",
      type: "pie",
      labels: ["N/A", "Orientation to Simulation", "Company Briefing", "1.1 EVP", "1.2 CFO"],
      data: [66, 49, 30, 23, 9],
      backgroundColor: [
        "rgba(59, 130, 246, 1)",
        "rgba(125, 211, 252, 1)",
        "rgba(52, 211, 153, 1)",
        "rgba(45, 212, 191, 1)",
        "rgba(167, 243, 208, 1)"
      ]
    };
  
    const cohortMilestoneChart = {
      chartLabel: "Cohort Milestone on Track",
      type: "doughnut",
      labels: ["On Track"],
      data: [6],
      backgroundColor: ["rgba(94, 234, 212, 1)"]
    };
  
    const userResponseChart = {
      chartLabel: "User Response",
      type: "doughnut",
      labels: ["Not Confident", "Extremely Confident"],
      data: [0, 14],
      backgroundColor: ["rgba(94, 234, 212, 1)", "rgba(94, 234, 212, 1)"]
    };
  
    const top3CorrectChart = {
      chartLabel: "Top 3 Correct Percentage and Points Throughout the Levels",
      type: "bar",
      labels: ["d94a8d18-b494-4ac3...", "0573a9b9-c9fc-4aa6...", "7ec46834-46ef-4070..."],
      datasets: [
        {
          label: "Sum of correct_percentage",
          data: [300, 100, 400],
          backgroundColor: "rgba(52, 211, 153, 1)"
        },
        {
          label: "Sum of points",
          data: [1200, 900, 850],
          backgroundColor: "rgba(34, 197, 94, 1)"
        }
      ]
    };
  
    const top3UsersChart = {
      chartLabel: "Top 3 Users by Points",
      type: "bar",
      labels: ["d94a8d18-b494-4ac3...", "0573a9b9-c9fc-4aa6...", "7ec46834-46ef-4070..."],
      data: [1200, 500, 400],
      backgroundColor: "rgba(94, 234, 212, 1)"
    };
  
    const top3EachLevelChart = {
      chartLabel: "Top 3 Users by Each Level",
      type: "bar",
      labels: ["5d7738a41373480017b2c5d1", "5d5f86144b98850017a51fea"],
      datasets: [
        {
          label: "0573a9b9-c9fc-4aa6-a340-17909a6c34d2",
          data: [450, 0],
          backgroundColor: "rgba(34, 197, 94, 1)"
        },
        {
          label: "7ec46834-46ef-4070-ba12-fff7fbbe9f79",
          data: [400, 0],
          backgroundColor: "rgba(6, 182, 212, 1)"
        },
        {
          label: "d94a8d18-b494-4ac3-88d6-c322b9e29f83",
          data: [440, 800],
          backgroundColor: "rgba(59, 130, 246, 1)"
        }
      ]
    };
  </script>
  
  <div class="flex min-h-screen bg-gray-50">
    <SideBarAdmin />
    <div class="flex-grow px-8 py-10">
      <h1 class="text-4xl font-bold mb-8">Analytics</h1>
  
      <!-- Pie Charts Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Chart {...levelCompletionChart} />
        <Chart {...scenarioCompletionChart} />
      </div>
  
      <!-- Donut Charts Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Chart {...cohortMilestoneChart} />
        <Chart {...userResponseChart} />
      </div>
  
      <!-- Bar Charts Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Chart {...top3CorrectChart} />
        <Chart {...top3UsersChart} />
      </div>
  
      <!-- Full-width Bar Chart -->
      <div class="w-full">
        <Chart {...top3EachLevelChart} />
      </div>
    </div>
  </div>
  