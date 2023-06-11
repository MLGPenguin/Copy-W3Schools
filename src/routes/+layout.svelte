<script lang="ts">
    import "../app.css"
    import 'iconify-icon'
    import { goto } from '$app/navigation';
	import tutorials from '$lib/tutorials.json';

  const languages = tutorials.map((tute) => { return tute.topic });
</script>

<nav class="p-4">
    <button on:click={() => goto('/')} class="bg-green-200">Home</button>
    <a> Tutorials </a>
    <a> Exercises </a>
    <a> Services </a>
</nav>
<div class="text-white bg-[#282A35]">
    {#each languages as lang (lang)}
      <button on:click={() => goto(`/${lang}?Home`)} class="px-4 py-2 hover:bg-zinc-900 text-sm tracking-wide"> 
        {lang} 
      </button>
    {/each}
</div>

<slot />
