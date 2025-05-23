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
            borderWidth: data.borderWidth,
            borderColor: data.borderColor,
            backgroundColor: data.backgroundColor,
            cubicInterpolationMode: data.cubicInterpolationMode,
            tension: data.tension,
          },
        ],
      },
      options: {
        indexAxis: data.indexAxis,
        scales: {
          y: 
          {
            beginAtZero: false,
            max: 3.5,
          },
        },
      },
    });
  });
</script>

<div class="chart-container h-[{data.size.height}] w-[{data.size.width}]">
  <div class="chart-header font-semibold">
    {data.chartLabel}
  </div>
  <canvas id="chart" height={data.size.height} width={data.size.width} bind:this={ctx}></canvas>
</div>
