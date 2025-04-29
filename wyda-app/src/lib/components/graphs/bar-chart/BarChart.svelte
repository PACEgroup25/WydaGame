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
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
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
