<script lang="ts">
    import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
    import Chart from "$lib/components/ui/chart/chart.svelte";
  
    let { data } = $props();
    let cohortData = data.values[4];
    let scenarioChart = data.values[5];
    let scorersChart = data.values[6];
  </script>
  
  <div class="main-container flex flex-wrap gap-10 mt-10">
    <div class="analytics-section w-full flex">
      <div class="analytics-container">
        <div class="w-full max-w-5xl mx-auto px-4">

            <div class="text-4xl font-bold mb-2">Workshops</div>
            <div class="text-2xl font-bold mb-6 mt-14"> Check in Workshop Planning </div>
            <div class="w-full">
            <Chart type={"bar"} {...cohortData} indexAxis={"y"}></Chart>

            <div class="text-2xl font-bold mb-6 mt-20"> Wrap Up Workshop Planning </div>
            <Chart type={"bar"} {...scenarioChart} />
            <div class="mt-20  mb-5"> 
            <Chart type={"bar"} {...scorersChart} />
            </div>
            </div>
        </div>
       
      </div>
    </div>
  </div>