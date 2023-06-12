<script lang="ts">
  import PillButton from "$lib/components/PillButton.svelte";
  import TextBox from "$lib/components/TextBoxComponent.svelte";
  import sections from "$lib/HomePage/sections.json"
  import LangSection from "./HomeComponents/LangSection.svelte";

  let searchinput: string

  /*  TODO  
  
    Div under nav bar needs to dynamically populate by screenwidth


  */


</script>

<div class="bg-[#282A35]" style="font-family: 'Source Sans Pro', sans-serif;">
  <div class="h-[30vh]" />
  <center class="font-extrabold">
    <h1 class="text-white py-4 text-7xl">Learn to Code</h1>
    <h2 class="text-rose-200 text-2xl py-4"> With the world's largest web developer site. </h2>
    <br>
    <form class="w-[80vwmin] inline-flex">
      <input bind:value={searchinput} placeholder="Search our tutorials, e.g. HTML" 
        class="w-[24rem] rounded-l-full px-4 py-3 font-bold placeholder-gray-500 align-middle " />

      <iconify-icon icon="gridicons:search" height=24 style="color: white" 
        class="bg-green-500 px-[2rem] py-3 align-middle rounded-e-full border-[1px] border-green-500 left-[-4px] relative "/>
    </form>
    <div class="p-4" />
    <a href="/" class="text-white text-2xl underline">Not Sure Where To Begin?</a>
    <div class='p-12' /> 
    <div id="wave" style="background-color: #D9EEE1">
      <svg viewBox="0 0 100 100" height=70 width=100% preserveAspectRatio="none">
        <path style="fill:#282A35;" d=" 
          M 0,0  
          L 110,0
          C 35,150 35,0 0,100z " />
      </svg>
      
      {#each sections as section}
        <LangSection 
          name={section.name} 
          description={section.description} 
          backgroundcolor={section.backgroundcolor} 
          textbox={section.textbox}
          pills={section.pills}
          invertcolors={section.invertcolors}
        />
      {/each}

      <!-- <div class="h-12"></div>
      <div class="flex w-[80%] font-semibold">
        <div id="Left" class='w-[50%] items-center flex flex-col'>
          <h1 class="text-8xl my-4">HTML</h1>
          <h4 class="my-2">The language for building web pages</h4>
          <PillButton content="Learn HTML" backgroundcolor="green" />
          <PillButton content="Video Tutorial" backgroundcolor="yellow" textcolor="black"/>
          <PillButton content="HTML Reference" properties="bg-black "/>
          <PillButton content="Get Certified" properties="bg-red-200 text-black"/>
        </div>
        <div class="w-[50%]">
          <TextBox />
        </div> -->
      <!-- </div> -->
    </div>    
</center>
</div>
