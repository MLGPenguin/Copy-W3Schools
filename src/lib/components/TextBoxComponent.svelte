<script lang="ts">
  import PillButton from "./PillButton.svelte";

  export let header: string;
  export let content: string;
</script>

<div class="bg-gray-200 shadow-md shadow-slate-500 min-w-fit text-left">
    <h1 class="text-3xl p-4">{header}</h1>
    <div class="bg-white border-l-4 border-green-500 font-normal mx-4">
      <pre class="p-4">
{`${content}`}
      </pre>
  </div>
  <div>
    <PillButton content="Try it yourself" backgroundcolor="#04AA6D"/>
  </div>
</div>