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
<div class="h-12" />
  <div id="container" class="flex w-[80%] font-semibold flex-wrap">

    <div id="left" class="w-[50%] items-center flex flex-col min-w-fit">
      <h1 class="text-8xl my-4 {textcolor }">{name}</h1>
      <h4 class="my-2 {textcolor}">{description}</h4>
      {#each pills as pill} 
        <PillButton content={pill.content} backgroundcolor={pill.backgroundcolor} textcolor={pill.textcolor} />
      {/each}
    </div>

    <div id="right" class="w-[50%]"> 
        <TextBoxComponent header={textbox.header} content={textbox.content} />
    </div>
  </div>
<div class="h-12" />
</div>
