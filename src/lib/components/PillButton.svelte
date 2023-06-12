<script lang="ts">
    export let content: string;
    export let properties: string = "";
    export let onClick: (() => void) | null = null;

</script>

    <button 
        on:click={onClick} 
        class={`text-white ${properties} rounded-full m-4 w-[13rem] h-12`}>{content}
    </button> 