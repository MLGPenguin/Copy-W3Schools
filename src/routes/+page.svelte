<script lang="ts">
  const languages = ["HTML", "CSS", "JAVASCRIPT", "SQL", "PYTHON", "JAVA", "PHP"];

  let searchinput: string

  /*  TODO  
  
    Div under nav bar needs to dynamically populate by screenwidth



  */
</script>

<div class="bg-[#282A35]" style="font-family: 'Source Sans Pro', sans-serif;">
  <div class="text-white">
    {#each languages as lang (lang)}
      <button class="px-4 py-2 hover:bg-zinc-900 text-sm tracking-wide"> {lang} </button>
    {/each}
  </div>
  <div class="py-10" />
  <center class="font-extrabold">
    <h1 class="text-white py-4 text-7xl">Learn to Code</h1>
    <h2 class="text-rose-200 text-2xl py-4"> With the world's largest web developer site. </h2>
    <br>
    <form class="w-[80vwmin]">
      <input bind:value={searchinput} placeholder="Search our tutorials, e.g. HTML" 
        class="w-[24rem] rounded-l-full px-4 py-3 font-bold placeholder-gray-500 align-middle " />

      <iconify-icon icon="gridicons:search" height=24 style="color: white" 
        class="bg-green-500 px-[2rem] py-3 align-middle rounded-e-full white-icon border-[1px] border-green-500 left-[-4px] relative "/>
    </form>
    <div class="p-4" />
    <a class="text-white text-2xl underline">Not Sure Where To Begin?</a>
    <div class='p-12' /> 
</center>
</div>
