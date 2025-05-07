<script>
  import RecentActivity from "$lib/components/ui/recent-activity/recentActivity.svelte";
  import LearnerSupport from "$lib/components/ui/learner-support/learnerSupport.svelte";

  //TODO: extract data, have component accept data through props from a server and data file
  // implement css classes where needed. Extract components where appropriate

  let learners = ["Learner #1", "Learner #2", "Learner #3", "Learner #4"];
  let recentActivity = [
    {
      name: "Learner #1",
      org: "Sales",
      challenge: "Challenge 5",
      date: "Today 4:15",
    },
    {
      name: "Learner #2",
      org: "Marketing",
      challenge: "Challenge 1",
      date: "Yesterday 9:00",
    },
    {
      name: "Learner #3",
      org: "Tech",
      challenge: "Challenge 3",
      date: "Yesterday 3:15",
    },
    {
      name: "Learner #4",
      org: "Sales",
      challenge: "Challenge 2",
      date: "Yesterday 2:56",
    },
  ];
</script>

<div class="main-container flex flex-wrap gap-10 mt-10">
  <div class="section-1-container w-full flex justify-center">
    <div class="section-1 max-w-[65em] flex flex-col gap-10 justify-center">
      <div class="heading text-4xl w-full p-4 font-bold">
        Welcome Back Example User!
      </div>
      <div class="stats-container flex flex-wrap justify-around w-full gap-10">
        <div class="summary-stats">
          <div class="data text-4xl">65%</div>
          <div class="description font-semibold">On track learners</div>
        </div>
        <div class="summary-stats">
          <div class="data text-4xl">10%</div>
          <div class="description font-semibold">At risk</div>
        </div>
        <div class="summary-stats">
          <div class="data text-4xl">5.7</div>
          <div class="description font-semibold">Avg reflection quality</div>
        </div>
        <div class="summary-stats">
          <div class="data text-4xl">20</div>
          <div class="description font-semibold">Active learning streaks</div>
        </div>
      </div>
      <div class="learner-info flex flex-wrap w-full justify-between gap-10">
        <RecentActivity recentActivity={recentActivity}/>
        <LearnerSupport learners={learners}/>
      </div>
    </div>
  </div>
</div>
