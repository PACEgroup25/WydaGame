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
          <div
            class="analytics-container p-2 flex flex-wrap gap-10 justify-around max-w-[70em]"
          >
            <div class="header w-full text-4xl p-4 font-bold">Analytics</div>
            <div class="chart-container">
              <div class="chart-header font-semibold"></div>
              Overall User's Progress By levels
              <BarChart {...userProgressData}></BarChart>
            </div>

            <div class="chart-container">
              <div class="chart-header font-semibold">
                Count of anonymous_id by scenario_name
              </div>
              <BarChart {...scenarioData}></BarChart>
            </div>

            <div class="chart-container">
              <div class="chart-header font-semibold">
                Count of Users by Attempts
              </div>
              <BarChart {...countOfUsersByAttempts}></BarChart>
            </div>

            <div class="chart-container h-fit">
              <div class="chart-header font-semibold">
                User's Reflection Quality
              </div>
              <PieChart {...pieChartData}></PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
