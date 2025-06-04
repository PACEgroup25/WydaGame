<script lang="ts">
    const learners = [
      {
        name: 'Learner #1',
        support: 'Guided',
        cohort: 'Cohort 1',
        status: 'On track',
        lastLogin: '1d ago'
      },
      {
        name: 'Learner #2',
        support: 'Independent',
        cohort: 'Cohort 3',
        status: 'On track',
        lastLogin: '3d ago'
      },
      {
        name: 'Learner #3',
        support: 'Independent',
        cohort: 'Cohort 2',
        status: 'Behind',
        lastLogin: '2d ago'
      },
      {
        name: 'Learner #4',
        support: 'Frequent',
        cohort: 'Cohort 1',
        status: 'On track',
        lastLogin: '1d ago'
      },
      {
        name: 'Learner #5',
        support: 'Guided',
        cohort: 'Cohort 3',
        status: 'At risk',
        lastLogin: '1d ago'
      },
      {
        name: 'Learner #6',
        support: 'Frequent',
        cohort: 'Cohort 1',
        status: 'On track',
        lastLogin: '7d ago'
      },
      {
        name: 'Learner #7',
        support: 'Guided',
        cohort: 'Cohort 1',
        status: 'At risk',
        lastLogin: '4d ago'
      },
      {
        name: 'Learner #8',
        support: 'Guided',
        cohort: 'Cohort 2',
        status: 'Behind',
        lastLogin: '1d ago'
      },
      {
        name: 'Learner #9',
        support: 'Independent',
        cohort: 'Cohort 1',
        status: 'On track',
        lastLogin: '2d ago'
      },
      {
        name: 'Learner #10',
        support: 'Guided',
        cohort: 'Cohort 2',
        status: 'Behind',
        lastLogin: '3d ago'
      },
      {
        name: 'Learner #11',
        support: 'Frequent',
        cohort: 'Cohort 3',
        status: 'On track',
        lastLogin: '5d ago'
      },
      {
        name: 'Learner #12',
        support: 'Independent',
        cohort: 'Cohort 1',
        status: 'At risk',
        lastLogin: '6d ago'
      }
    ];

    let {data} = $props();
    console.log(data.learners);
    let cohorts = data.learners

  </script>
  
  <section class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Learner Support</h1>
      <div class="text-right text-sm">
        <div class="font-semibold text-blue-900">Wed 30 Apr 16:40</div>
        <div class="text-gray-500">Last login: 2 hrs ago</div>
      </div>
    </div>
  
    <div class="flex gap-4 mb-6">
      <div>
        <button class="bg-gray-200 px-4 py-2 rounded">Filter ▾</button>
      </div>
      <div>
        <button class="bg-gray-200 px-4 py-2 rounded">Export ▾</button>
      </div>
    </div>

    {#each cohorts as cohort}
      {#each cohort.learners as learner}
        <div>
          {learner.firstName}
          {cohort.cohortId}
          {cohort.cohortName}
        </div>
      {/each}
    {/each}
  
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each learners as learner}
        <div class="border border-blue-300 rounded-lg p-4 flex flex-col items-center">
          <div class="text-5xl text-blue-300 mb-2">👤</div>
          <h2 class="font-bold text-lg mb-1">{learner.name}</h2>
          <div class="text-sm mb-1 text-gray-600">{learner.support} : {learner.cohort}</div>
  
          <div class={`text-white text-sm font-semibold px-3 py-1 rounded-full mb-2
            ${learner.status === 'On track' ? 'bg-green-500' :
              learner.status === 'Behind' ? 'bg-orange-500' :
              learner.status === 'At risk' ? 'bg-red-600' : 'bg-gray-400'}`}>
            {learner.status}
          </div>
  
          <div class="text-xs text-gray-500 mb-3">Last login : {learner.lastLogin}</div>
  
          <button class="text-blue-600 font-medium hover:underline flex items-center gap-1">
            View details →
          </button>
        </div>
      {/each}
    </div>
  </section>