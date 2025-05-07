<script lang="ts">
  import SideBarLearningCoach from "%lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import BarChart from "%lib/components/graphs/bar-chart/BarChart.svelte";
  import PieChart from "%lib/components/graphs/pie-chart/PieChart.svelte";

  let { data } = $props();
  let userProgressData = data.values[0];
  let scenarioData = data.values[1];
  let countOfUsersByAttempts = data.values[2];
  let pieChartData = data.values[3];
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        <div class="analytics-section w-full flex justify-center">
          <div class="analytics-container">
            <div class="analytics-header">Analytics</div>
            <BarChart {...userProgressData}></BarChart>
            <BarChart {...scenarioData}></BarChart>
            <BarChart {...countOfUsersByAttempts}></BarChart>
            <PieChart {...pieChartData}></PieChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
