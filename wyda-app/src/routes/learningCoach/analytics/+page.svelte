<script>
  import SideBarLearningCoach from "%lib/components/ui/side-bar/SideBarLearningCoach.svelte";
  import BarChart from "%lib/components/graphs/bar-chart/BarChart.svelte";
  import PieChart from "%lib/components/graphs/pie-chart/PieChart.svelte";

  const pieChartdata = {
    chartLabel: "User's Reflection Quality",
    labels: ["low", "high"],
    backgroundColor: ["rgba(222,90,90,1)", "rgba(180,221,221,1)"],
    data: [300, 150],
  };

  const userProgressData = {
    direction: "col",
    chartLabel: "Overall User's Progress By Levels",
    labels: ["Onboarding Activities", "Level Name", "Profitability"],
    data: [12, 10, 5],
    backgroundColor: ["rgb(180,221,221)"],
  };

  const countOfUsersByAttempts = {
    chartLabel: "Count of Users by Attempts",
    labels: [
      "id1",
      "id2",
      "id3",
      "id4",
      "id5",
      "id6",
      "id7",
      "id8",
      "id9",
      "id10",
      "id11",
      "id12",
      "id13",
    ],
    backgroundColor: ["rgb(180,221,221)"],
    data: [14, 6, 8, 9, 9, 2, 5, 11, 24, 9, 6, 8, 66],
  };

  const scenarioData = {
    chartLabel: "Count of anonymous_id by scenario_name",
    labels: [
      "1.1 EVP",
      "1.2 CFO",
      "Company Breifing",
      "N/A",
      "Orientation to Simulation",
    ],
    backgroundColor: ["rgb(180,221,221)"],
    data: [22, 10, 30, 70, 50],
  };
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard flex flex-col items-center justify-start w-full">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        <div class="analytics-section w-full flex justify-center">
          <div
            class="analytics-container p-2 flex flex-wrap gap-10 justify-around max-w-[70em]"
          >
            <div class="header w-full text-4xl p-4 font-bold">Analytics</div>
            <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
              <div class="chart-header font-semibold"></div>
              Overall User's Progress By levels
              <BarChart {...userProgressData}></BarChart>
            </div>

            <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
              <div class="chart-header font-semibold">
                Count of anonymous_id by scenario_name
              </div>
              <BarChart {...scenarioData}></BarChart>
            </div>

            <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
              <div class="chart-header font-semibold">
                Count of Users by Attempts
              </div>
              <BarChart {...countOfUsersByAttempts}></BarChart>
            </div>

            <div
              class="border border-[#7accc6] p-2 flex flex-col rounded-sm h-fit"
            >
              <div class="chart-header font-semibold">
                User's Reflection Quality
              </div>
              <PieChart {...pieChartdata}></PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
