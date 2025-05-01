<script>
  import PieChart from "$lib/components/graphs/pie-chart/PieChart.svelte";
  import BarChart from "%lib/components/graphs/bar-chart/BarChart.svelte";
  import * as Table from "$lib/components/ui/table/index";
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
    chartLabel: "Count of anomymous_id by scenario_name",
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
  <div class="heading text-4xl w-full p-4">Welcome Back Example User!</div>
  <div class="stats-container flex justify-around w-full">
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

  <div class="learner-info flex w-full justify-around">
    <div
      class="recent-activity border border-[#7accc6] p-2 flex flex-col rounded-sm"
    >
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-full">Name</Table.Head>
            <Table.Head class="text-right">Org/BU</Table.Head>
            <Table.Head>Challenge</Table.Head>
            <Table.Head>Date</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell class="font-medium">Onboarding Activities</Table.Cell>
            <Table.Cell class="text-right">40 min</Table.Cell>
            <Table.Cell>Launch</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell class="font-medium"
              >Orientation to Simulation</Table.Cell
            >
            <Table.Cell class="text-right">15 min</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell class="font-medium">Onboarding Activities</Table.Cell>
            <Table.Cell class="text-right">25 min</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
    <div
      class="learner-support border border-[#7accc6] p-4 flex flex-col rounded-sm"
    >
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-full">Name</Table.Head>
            <Table.Head class="text-right">Org/BU</Table.Head>
            <Table.Head>Challenge</Table.Head>
            <Table.Head>Date</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell class="font-medium">Onboarding Activities</Table.Cell>
            <Table.Cell class="text-right">40 min</Table.Cell>
            <Table.Cell>Launch</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell class="font-medium"
              >Orientation to Simulation</Table.Cell
            >
            <Table.Cell class="text-right">15 min</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell class="font-medium">Onboarding Activities</Table.Cell>
            <Table.Cell class="text-right">25 min</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  </div>

  <div class="header w-full text-4xl font-bold">Analytics</div>

  <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
    <BarChart {...userProgressData}></BarChart>
  </div>

  <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
    <BarChart {...scenarioData}></BarChart>
  </div>

  <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
    <BarChart {...countOfUsersByAttempts}></BarChart>
  </div>

  <div class="border border-[#7accc6] p-2 flex flex-col rounded-sm">
    <div class="chart-header font-semibold">User's Reflection Quality</div>
    <PieChart {...pieChartdata}></PieChart>
  </div>
</div>
