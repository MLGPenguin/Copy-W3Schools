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
  <div class="h-44" />
  <center class="font-extrabold">
    <h1 class="text-white py-4 text-7xl">Learn to Code</h1>
    <h2 class="text-rose-200 text-2xl py-4"> With the world's largest web developer site. </h2>
    <br>
    <form class="inline-flex max-w-md w-full px-4">
      <input bind:value={searchinput} placeholder="Search our tutorials, e.g. HTML" 
        class="w-full rounded-l-full px-4 py-3 font-bold placeholder-gray-500" />
      <button>
        <iconify-icon icon="gridicons:search" height=24 style="color: white" 
          class="bg-green-500 px-8 py-3 align-middle rounded-r-full border border-green-500"
        />
      </button>
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
    </div>    
</center>
</div>
