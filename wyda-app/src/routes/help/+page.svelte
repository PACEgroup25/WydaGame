<script>
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
  import { Hotel, Mail } from "@lucide/svelte";
</script>

<main>
  <div class="page-container flex flex-row">
    <SideBar />
    <div
      class="dashboard flex flex-col items-start justify-start items-center h-100dvh w-full"
    >
      <div class="info flex flex-col p-[3em] w-[65em]">
        <div class="title text-[2.5em] mb-4 font-semibold">Help</div>
        <div class="text-2xl">
          What to do when you are having issues with the game? Read more below!
          We're here to ensure your learning experience is smooth and
          empowering.
        </div>
      </div>
      <div class="contact-section p-[3em] w-[65em]">
        <div class="header text-2xl font-semibold mb-4">Contact us</div>
        <div class="info flex justify-between flex-wrap">
          <div class="address flex flex-wrap">
            <Hotel />
            6 Middlemiss Street, Lavender Bay (Gooweebahree) Sydney, Australia, NSW,
            2060
          </div>
          <div class="email flex">
            <Mail />
            hello@wydagame.com
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
