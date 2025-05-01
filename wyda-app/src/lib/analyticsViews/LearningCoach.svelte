<script>
  import PieChart from "$lib/components/graphs/pie-chart/PieChart.svelte";
  const data = {
    chartLabel: "User's Reflection Quality",
    labels: ["low", "high"],
    backgroundColor: ["rgba(222,90,90,1)", "rgba(180,221,221,1)"],
    data: [300, 150],
  };
</script>

<p class="text-blue-600 text-4xl">Learning Coach View</p>
<div>
  <PieChart {...data}></PieChart>
</div>
