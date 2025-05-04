<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  let ctx: HTMLCanvasElement;

  export let chartLabel: string;
  export let labels: string[];
  export let data: number[];
  export let backgroundColor: string[];

  onMount(async () => {
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: chartLabel,
            data: data,
            backgroundColor: backgroundColor,
            hoverOffset: 4,
          },
        ],
      },
    });
  });
</script>

<div class=" h-[20em]">
  <canvas id="chart" bind:this={ctx}></canvas>
</div>
