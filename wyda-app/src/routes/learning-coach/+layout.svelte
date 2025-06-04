<script>
    import SideBarLearningCoach from "$lib/components/ui/side-bar/SideBarLearningCoach.svelte";
</script>


<main>
    <div class="page-container flex flex-row">
        <SideBarLearningCoach />
        <div class="dashboard">
            <div class="main-container flex flex-wrap gap-10 mt-10">
                <slot />
            </div>
        </div>
    </div>
</main>