<script lang="ts">
    import type { TextBox } from "./HomeTypes";
    import type { Pill } from "./HomeTypes"

    import TextBoxComponent from "$lib/components/TextBoxComponent.svelte";
    import PillButton from "$lib/components/PillButton.svelte";

  export let name: string;
  export let description: string;
  export let backgroundcolor: string;
  export let textbox: TextBox;
  export let pills: Pill[];
  export let invertcolors: boolean | undefined

  const textcolor = invertcolors ? "text-white" : "text-black"
</script>

<div style={`background-color: ${backgroundcolor}`}>
  <div id="container" class="flex flex-wrap max-w-5xl font-semibold py-12">
    <div id="left" class="w-1/2 items-center flex flex-col min-w-fit mx-auto">
      <h1 class="text-6xl md:text-8xl my-4 {textcolor }">{name}</h1>
      <h4 class="my-2 {textcolor}">{description}</h4>
      {#each pills as pill} 
        <PillButton content={pill.content} backgroundcolor={pill.backgroundcolor} textcolor={pill.textcolor} />
      {/each}
    </div>

    <div id="right" class="w-1/2 mx-auto min-w-fit py-4 hidden md:block"> 
        <TextBoxComponent header={textbox.header} content={textbox.content} />
    </div>
  </div>
</div>
