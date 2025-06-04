<script lang="ts">
  import { User } from "@lucide/svelte";
  import { goto } from "$app/navigation";

  const learners = [
    {
      name: "Learner #1",
      support: "Guided",
      cohort: "Cohort 1",
      status: "On track",
      lastLogin: "1d ago",
    },
    {
      name: "Learner #2",
      support: "Independent",
      cohort: "Cohort 3",
      status: "On track",
      lastLogin: "3d ago",
    },
    {
      name: "Learner #3",
      support: "Independent",
      cohort: "Cohort 2",
      status: "Behind",
      lastLogin: "2d ago",
    },
    {
      name: "Learner #4",
      support: "Frequent",
      cohort: "Cohort 1",
      status: "On track",
      lastLogin: "1d ago",
    },
    {
      name: "Learner #5",
      support: "Guided",
      cohort: "Cohort 3",
      status: "At risk",
      lastLogin: "1d ago",
    },
    {
      name: "Learner #6",
      support: "Frequent",
      cohort: "Cohort 1",
      status: "On track",
      lastLogin: "7d ago",
    },
    {
      name: "Learner #7",
      support: "Guided",
      cohort: "Cohort 1",
      status: "At risk",
      lastLogin: "4d ago",
    },
    {
      name: "Learner #8",
      support: "Guided",
      cohort: "Cohort 2",
      status: "Behind",
      lastLogin: "1d ago",
    },
    {
      name: "Learner #9",
      support: "Independent",
      cohort: "Cohort 1",
      status: "On track",
      lastLogin: "2d ago",
    },
    {
      name: "Learner #10",
      support: "Guided",
      cohort: "Cohort 2",
      status: "Behind",
      lastLogin: "3d ago",
    },
    {
      name: "Learner #11",
      support: "Frequent",
      cohort: "Cohort 3",
      status: "On track",
      lastLogin: "5d ago",
    },
    {
      name: "Learner #12",
      support: "Independent",
      cohort: "Cohort 1",
      status: "At risk",
      lastLogin: "6d ago",
    },
  ];

  let { data } = $props();
  console.log(data.learners);
  let cohorts = data.learners;

  let map = new Map();

  for (var i = 0; i < cohorts.length; i++) {
    for (var j = 0; j < cohorts[i].metrics.length; j++) {
      let curr = cohorts[i].metrics[j];
      if (curr) {
        map.set(curr.id, curr.userStatus);
      }
    }
  }
</script>

<section class="p-6">
  <div class="flex justify-left items-center mb-6">
    <h1 class="text-2xl font-bold">Learner Support</h1>
  </div>

  <div class="flex gap-4 mb-6">
    <div>
      <button class="bg-gray-200 px-4 py-2 rounded">Filter ▾</button>
    </div>
    <div>
      <button class="bg-gray-200 px-4 py-2 rounded">Export ▾</button>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    {#each cohorts as cohort}
      {#each cohort.learners as learner}
        <div
          class="border border-blue-300 rounded-lg p-4 flex flex-col items-center"
        >
          <div class="text-5xl text-blue-300 mb-2"><User /></div>
          <h2 class="font-bold text-lg mb-1">{learner.firstName}</h2>
          <div class="text-sm mb-1 text-gray-600">
            {learner.learningSupport} : {cohort.cohortName}
          </div>
          {#if map.get(learner.entityID) === 1}
            <div
              class="text-white text-sm font-semibold px-3 py-1 rounded-full mb-2 bg-green-500"
            >
              On track
            </div>
          {:else}
            <div
              class="text-white text-sm font-semibold px-3 py-1 rounded-full mb-2 bg-red-600"
            >
              Behind
            </div>
          {/if}

          <!-- <div class={`text-white text-sm font-semibold px-3 py-1 rounded-full mb-2
              ${learner.status === 'On track' ? 'bg-green-500' :
                learner.status === 'Behind' ? 'bg-orange-500' :
                learner.status === 'At risk' ? 'bg-red-600' : 'bg-gray-400'}`}>
              {learner.status}
            </div> -->

          <!-- <div class="text-xs text-gray-500 mb-3">Last login : {learner.lastLogin}</div> -->

          <button
            class="text-blue-600 font-medium hover:underline flex items-center gap-1"
            onclick={() =>
              goto(
                "/learning-coach/learner-support/learner-profile/" +
                  learner.entityID
              )}
          >
            View details →
          </button>
        </div>
      {/each}
    {/each}
  </div>
</section>
