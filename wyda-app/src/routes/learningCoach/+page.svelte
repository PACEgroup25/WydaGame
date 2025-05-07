<script>
  //TODO: refactor into variant instead of seperate component
  import SideBarLearningCoach from "%lib/components/ui/side-bar/SideBarLearningCoach.svelte";
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
  let statistics = [
    {
      value: "65%",
      description: "On track learners",
    },
    {
      value: "10%",
      description: "At risk",
    },
    {
      value: "5.7",
      description: "Avg reflection quality",
    },
    {
      value: "20",
      description: "Active learning streaks",
    },
  ];
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBarLearningCoach />
    <div class="dashboard">
      <div class="main-container flex flex-wrap gap-10 mt-10">
        <div class="section-1-container w-full flex justify-center">
          <div class="section-1 max-w-[65em] flex flex-col gap-10 justify-center">
            <div class="heading text-4xl w-full p-4 font-bold">
              Welcome Back Example User!
            </div>
            <div class="stats-container flex flex-wrap justify-around w-full gap-10">
              {#each statistics as stat}
              <div class="summary-stats">
                <div class="data text-4xl">{stat.value}</div>
                <div class="description font-semibold">{stat.description}</div>
              </div>
              {/each}
            </div>
            <div class="learner-info flex flex-wrap w-full justify-between gap-10">
              <RecentActivity recentActivity={recentActivity}/>
              <LearnerSupport learners={learners}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
