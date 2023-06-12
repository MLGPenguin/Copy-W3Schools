<script lang="ts">
  export let header: string;
  export let content: string;
</script>

<div class="bg-gray-200 shadow-md shadow-slate-500 h-[90%]">
    <h1 class="text-3xl text-left p-4">{header}</h1>
    <div class="bg-white w-[90%] h-[80%] border-l-4 border-green-500 text-left font-normal">
      <pre class="p-4">
{`${content}`}
    </pre>
  </div>
</div>