<script>
  import PieChart from "$lib/components/graphs/pie-chart/PieChart.svelte";
  import BarChart from "%lib/components/graphs/bar-chart/BarChart.svelte";
  import * as Table from "$lib/components/ui/table/index";
  import { UserRound, ChevronRight } from "@lucide/svelte";

  const pieChartdata = {
    chartLabel: "User's Reflection Quality",
    labels: ["low", "high"],
    backgroundColor: ["rgba(222,90,90,1)", "rgba(180,221,221,1)"],
    data: [300, 150],
  };

  const userProgressData = {
    chartLabel: "Overall User's Progress By Levels",
    labels: ["Onboarding Activities", "Level Name", "Profitability"],
    backgroundColor: ["rgb(180,221,221)"],
    data: [12, 10, 5],
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

<div class="main-container flex flex-wrap gap-10">
  <div class="section-1-container w-full flex justify-center">
    <div class="section-1 max-w-[65em] flex flex-col gap-10 justify-center">
      <div class="heading text-4xl w-full p-4 font-bold">
        Welcome Back Example User!
      </div>
      <div class="stats-container flex flex-wrap justify-around w-full gap-10">
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">65%</div>
          <div class="description font-semibold">On track learners</div>
        </div>
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">10%</div>
          <div class="description font-semibold">At risk</div>
        </div>
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">5.7</div>
          <div class="description font-semibold">Avg reflection quality</div>
        </div>
        <div class="border border-[#7accc6] p-4 flex flex-col rounded-sm">
          <div class="data text-4xl">20</div>
          <div class="description font-semibold">Active learning streaks</div>
        </div>
      </div>

      <div class="learner-info flex flex-wrap w-full justify-between gap-10">
        <div
          class="recent-activity border border-[#7accc6] p-4 flex flex-col rounded-sm"
        >
          <div class="header text-2xl font-semibold">Recent Activity</div>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Org/BU</Table.Head>
                <Table.Head>Challenge</Table.Head>
                <Table.Head class="text-center">Date</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #1</Table.Cell>
                <Table.Cell>Sales</Table.Cell>
                <Table.Cell>Challenge 5</Table.Cell>
                <Table.Cell>Today 4:15</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #2</Table.Cell>
                <Table.Cell>Marketing</Table.Cell>
                <Table.Cell>Challenge 1</Table.Cell>
                <Table.Cell>Yesterday 9:00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #3</Table.Cell>
                <Table.Cell>Tech</Table.Cell>
                <Table.Cell>Challenge 3</Table.Cell>
                <Table.Cell>Yesterday 3:15</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="font-medium">Learner #4</Table.Cell>
                <Table.Cell>Sales</Table.Cell>
                <Table.Cell>Challenge 2</Table.Cell>
                <Table.Cell>Yesterday 2:56</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
        <div
          class="learner-support border border-[#7accc6] p-4 flex flex-col rounded-sm"
        >
          <div class="header text-2xl font-semibold">Learner Support</div>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #1</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #2</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #3</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell class="flex"><UserRound />Learner #4</Table.Cell>
                <Table.Cell><ChevronRight /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  </div>
  <div class="analytics-section w-full flex justify-center">
    <div
      class="analytics-container p-2 flex flex-wrap gap-10 justify-around max-w-[70em]"
    >
      <div class="header w-full text-4xl p-4 font-bold">Analytics</div>
      <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
        <div class="chart-header font-semibold"></div>
        <BarChart {...userProgressData}
          >Overall User's Progress By levels</BarChart
        >
      </div>

      <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
        <div class="chart-header font-semibold">
          Count of anonymous_id by scenario_name
        </div>
        <BarChart {...scenarioData}></BarChart>
      </div>

      <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
        <div class="chart-header font-semibold">Count of Users by Attempts</div>
        <BarChart {...countOfUsersByAttempts}></BarChart>
      </div>

      <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm h-fit">
        <div class="chart-header font-semibold">User's Reflection Quality</div>
        <PieChart {...pieChartdata}></PieChart>
      </div>
    </div>
  </div>
</div>
