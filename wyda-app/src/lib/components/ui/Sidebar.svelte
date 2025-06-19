<script lang="ts">
	import { page } from "$app/state";
	import { Home, ChartColumnIncreasing, BookOpenCheck, ChartNoAxesCombined, Info, ClipboardPlus } from "@lucide/svelte";
	import Button from "$lib/components/ui/button/button.svelte";
    import { invalidateAll } from '$app/navigation';

    let { user } = $props()

	let currentPath = $derived(page.url.pathname);
	
	let roles = $state(['Learning Coach',  'Client Admin', 'Learner' ]);

	let selected = $state(user.role ?? 'Learning Coach'); //the selected role

	async function handleRoleChange() { //$effect(() //bind:value = props???

		try {
            const res = await fetch(`/api/get-session?role=${encodeURIComponent(selected)}`, {
                method: 'GET',
                credentials: 'include'
		    });

            if (!res.ok) {
                console.error('New session failed');
                return;
            }
            else if(res.ok){
                const data = await res.json();
                console.log('Session started:', data);
                
                await new Promise((resolve) => setTimeout(resolve, 250))
                await invalidateAll();;
            }
            
	    } catch (err) {
		    console.error('Error making new session:', err);
	    }
	}
</script>

<div class="navigation-container w-60 bg-[#494A4A] border-r border-r-greyBorder h-dvh flex flex-col sticky top-0">
    <div class="locations-container flex flex-col h-full mt-8 mb-4 gap-y-2">
        <Button
            variant = "sidebar"
            href = "/dashboard"
            class="m-1 flex justify-start {currentPath === '/dashboard'? 'bg-[#676969]': 'bg-transparent'}">
            <Home />
            <span>Home</span>
        </Button>

        <Button
            variant = "sidebar"
            href = "/dashboard/analytics"
            class="m-1 flex justify-start {currentPath === '/dashboard/analytics'? 'bg-[#676969]': 'bg-transparent'}">
            <ChartNoAxesCombined />
            <span>Analytics</span>
        </Button>

        {#if selected != 'Learner'}
            <Button
                variant = "sidebar"
                href = "/dashboard/cohort-progress"
                class="m-1 flex justify-start {currentPath === '/dashboard/cohort-progress'? 'bg-[#676969]': 'bg-transparent'}">
                <ChartColumnIncreasing />
                <span>Cohort Progress</span>
            </Button>

            <Button
                variant = "sidebar"
                href = "/dashboard/learner-support"
                class="m-1 flex justify-start {currentPath === '/dashboard/learner-support'? 'bg-[#676969]': 'bg-transparent'}">
                <BookOpenCheck />
                <span>Learner Support</span>
            </Button>
        {/if}

        <Button
            variant = "sidebar"
            href = "/dashboard/reports"
            class="m-1 flex justify-start {currentPath === '/dashboard/reports'? 'bg-[#676969]': 'bg-transparent'}">
            <ClipboardPlus />
            <span>Reports</span>
        </Button>
        
        <Button
            variant = "sidebar"
            href = "/dashboard/help"
            class="m-1 flex justify-start {currentPath === '/dashboard/help'? 'bg-[#676969]': 'bg-transparent'}">
            <Info />
            <span>Help</span>
        </Button>

        <div class="mt-auto pt-4 mb-8 border-t border-gray-600 flex flex-col items-center">
            <label
                for="role-switcher"
                class="block text-sm font-semibold text-white mb-2 text-center">
            </label>
            <select
                id="role-switcher"
                bind:value={selected}
                onchange={handleRoleChange}>
                    {#each roles as role}
                        <option value={role}>{role}</option>
                    {/each}
            </select>
        </div>
    </div>
</div>