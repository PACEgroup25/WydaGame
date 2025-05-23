<script>
    import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
    let { children } = $props();
</script>

<main>
    <div class="page-container flex flex-row">
        <SideBarLearningCoach />
        <div class="dashboard">
            <div class="main-container flex flex-wrap gap-10 mt-10">
                {@render children()}
            </div>
        </div>
    </div>
</main>