<script>
  import SideBar from "$lib/components/ui/side-bar/SideBar.svelte";
  import { Hotel, Mail } from "@lucide/svelte";
  import * as Accordion from "$lib/components/ui/accordion";
</script>

<div class="dashboard">
  <div class="help-page max-w-[65em]">
    <div class="info flex flex-col p-[3em] w-full">
      <div class="title text-[2.5em] mb-4 font-semibold">Help</div>
      <div class="text-2xl">
        What to do when you are having issues with the game? Read more below!
        We're here to ensure your learning experience is smooth and empowering.
      </div>
    </div>
    <div class="contact-section p-[3em] w-full">
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
    <div class="accordion p-[3em] w-full">
      <Accordion.Root type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>FAQ</Accordion.Trigger>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Support</Accordion.Trigger>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Privacy Policy</Accordion.Trigger>
        </Accordion.Item>
        <Accordion.Item value="item-4">
          <Accordion.Trigger>Terms and Conditions</Accordion.Trigger>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  </div>
</div>
