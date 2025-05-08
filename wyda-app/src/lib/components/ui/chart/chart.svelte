<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let ctx: HTMLCanvasElement;

  let data = $props();

  onMount(async () => {
    new Chart(ctx, {
      type: data.type,
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.chartLabel,
            data: data.data,
            borderWidth: 1,
            backgroundColor: data.backgroundColor,
          },
        ],
      },
      options: {
        indexAxis: data.indexAxis,
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
    {data.chartLabel}
  </div>
  <canvas id="chart" height="400px" width="500px" bind:this={ctx}></canvas>
</div>
