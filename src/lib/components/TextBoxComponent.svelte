<script lang="ts">
  import PillButton from "./PillButton.svelte";

  export let header: string;
  export let content: string;
</script>

<div class="bg-gray-200 shadow-md shadow-slate-500 h-[90%] min-w-fit">
    <h1 class="text-3xl text-left p-4">{header}</h1>
    <div class="bg-white w-[90%] h-[70%] border-l-4 border-green-500 text-left font-normal">
      <pre class="p-4">
{`${content}`}
      </pre>
  </div>
  <div class="text-left ">
    <PillButton content="Try it yourself" backgroundcolor="#04AA6D"/>
  </div>
</div>