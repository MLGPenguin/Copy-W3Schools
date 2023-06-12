<script lang="ts">
  import PillButton from "$lib/components/PillButton.svelte";

  let searchinput: string

  /*  TODO  
  
    Div under nav bar needs to dynamically populate by screenwidth



  */
</script>

<div class="bg-[#282A35]" style="font-family: 'Source Sans Pro', sans-serif;">
  <div class="py-10" />
  <center class="font-extrabold">
    <h1 class="text-white py-4 text-7xl">Learn to Code</h1>
    <h2 class="text-rose-200 text-2xl py-4"> With the world's largest web developer site. </h2>
    <br>
    <form class="w-[80vwmin] inline-flex">
      <input bind:value={searchinput} placeholder="Search our tutorials, e.g. HTML" 
        class="w-[24rem] rounded-l-full px-4 py-3 font-bold placeholder-gray-500 align-middle " />

      <iconify-icon icon="gridicons:search" height=24 style="color: white" 
        class="bg-green-500 px-[2rem] py-3 align-middle rounded-e-full white-icon border-[1px] border-green-500 left-[-4px] relative "/>
    </form>
    <div class="p-4" />
    <a href="/" class="text-white text-2xl underline">Not Sure Where To Begin?</a>
    <div class='p-12' /> 
    <div id="HTML Showcase" class=bg-green-100>
      <svg viewBox="0 0 100 100" height=70 width=100% preserveAspectRatio="none">
        <path style="fill:#282A35;" d=" 
          M 0,0  
          L 110,0
          C 35,150 35,0 0,100z " />
      </svg>
      <div class="h-12"></div>
      <div id="Container" class="flex w-[80%] font-semibold">
        <div id="Left" class='w-[50%] items-center flex flex-col'>
          <h1 class="text-8xl my-4">HTML</h1>
          <h4 class="my-4">The language for building web pages</h4>
          <PillButton content="Learn HTML" properties="bg-green-500" />
          <PillButton content="Video Tutorial" properties="bg-yellow-200 text-black"/>
          <PillButton content="HTML Reference" properties="bg-black "/>
          <PillButton content="Get Certified" properties="bg-red-200 text-black"/>
        </div>
        <div id="Right" class="w-[50%] bg-gray-200 shadow-md shadow-slate-500">
          <h1 class="text-3xl text-left m-4">HTML Example: </h1>
          <div id="textpane" class="bg-white w-[90%] h-[80%] border-l-4 border-green-500 text-left font-normal">
            <pre class="m-4">
              {`
<!DOCTYPE html> 
<html>
<title>HTML Tutorial</title>
<body>
  
<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
                `}

            </pre>
          </div>
        </div>
      </div>
    </div>    
</center>
</div>
