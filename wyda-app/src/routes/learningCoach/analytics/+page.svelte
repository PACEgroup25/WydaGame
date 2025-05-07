<script lang="ts">
  import SideBarLearningCoach from "%lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import Chart from "%lib/components/ui/chart/chart.svelte";

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
            <Chart type={"bar"} {...userProgressData} indexAxis={"y"}></Chart>
            <Chart type={"bar"} {...scenarioData}></Chart>
            <Chart type={"bar"} {...countOfUsersByAttempts}></Chart>
            <Chart type={"pie"} {...pieChartData}></Chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
