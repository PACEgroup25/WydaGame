<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let ctx: HTMLCanvasElement;

  let data = $props();

  let height = data.size
    ? data.size.height
      ? data.size.height
      : "450px"
    : "450px";
  let width = data.size
    ? data.size.width
      ? data.size.width
      : "450px"
    : "450px";

  let y = data.y ? data.y : undefined;

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
  <canvas id="chart" {height} {width} bind:this={ctx}></canvas>
</div>
