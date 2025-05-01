<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let ctx: HTMLCanvasElement;

  let orientation: "x" | "y" | undefined = "x";

  export let direction = "x";

  if (direction == "row") {
    orientation = "y";
  }

  onMount(async () => {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: "rgba(180,222,221,1)",
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

<canvas id="chart" height="400px" width="500px" bind:this={ctx}></canvas>
