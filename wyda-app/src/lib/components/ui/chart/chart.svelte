<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let ctx: HTMLCanvasElement;

  let data = $props();

  let height = data.size?.height ?? "450px";
  let width = data.size?.width ?? "450px";
  let y = data.y ?? {};

  onMount(() => {
    new Chart(ctx, {
      type: data.type,
      data: {
        labels: data.labels,
        datasets: data.datasets ?? [
          {
            label: data.chartLabel,
            data: data.data,
            backgroundColor: data.backgroundColor,
            borderColor: data.borderColor,
            borderWidth: data.borderWidth,
            cubicInterpolationMode: data.cubicInterpolationMode,
            tension: data.tension,
          },
        ],
      },
      options: {
        indexAxis: data.indexAxis,
        scales: {
          y,
        },
      },
    });
  });
</script>

<div class="chart-container">
  <div class="chart-header font-semibold">
    {data.chartLabel}
  </div>
  <canvas {height} {width} bind:this={ctx}></canvas>
</div>
