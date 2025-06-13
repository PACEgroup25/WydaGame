<script lang="ts">
  //TODO: refactor into variant instead of seperate component
  import RecentActivity from "$lib/components/ui/recent-activity/recentActivity.svelte";
  import LearnerSupport from "$lib/components/ui/learner-support/learnerSupport.svelte";

  let { data } = $props();
  let learners = data.value.learners;
  let recentActivity = data.value.recentActivity;
  let statistics = data.value.statistics;
</script>


<div class="section-1-container w-full flex justify-center">
  <div
    class="section-1 max-w-[65em] flex flex-col gap-10 justify-center"
  >
    <div class="heading text-4xl w-full p-4 font-bold">
      Welcome Back Example User!
    </div>
    <div
      class="stats-container flex flex-wrap justify-around w-full gap-10"
    >
      {#each statistics as stat}
        <div class="summary-stats">
          <div class="data text-4xl">{stat.value}</div>
          <div class="description font-semibold">
            {stat.description}
          </div>
        </div>
      {/each}
    </div>
    <div
      class="learner-info flex flex-wrap w-full justify-between gap-10"
    >
      <RecentActivity {recentActivity} />
      <LearnerSupport {learners} />
    </div>
  </div>
</div>
