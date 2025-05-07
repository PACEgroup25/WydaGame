<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let ctx: HTMLCanvasElement;

  let orientation: "x" | "y" | undefined = "x";

  export let direction = "x";
  export let chartLabel: string;
  export let labels: string[];
  export let data: number[];
  export let backgroundColor: string[];

  if (direction == "row") {
    orientation = "y";
  }

  onMount(async () => {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: chartLabel,
            data: data,
            borderWidth: 1,
            backgroundColor: backgroundColor,
          },
        ],
      },
      options: {
        indexAxis: orientation,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
</script>

<div class="chart-container">
  <div class="chart-header font-semibold">
    {chartLabel}
  </div>
  <canvas id="chart" height="400px" width="500px" bind:this={ctx}></canvas>
</div>
