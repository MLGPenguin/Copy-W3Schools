<script lang="ts">
    export let content: string;
    export let backgroundcolor: string;
    export let textcolor: string | null = "white";
    export let onClick: (() => void) | null = null;

</script>

    <button 
        on:click={onClick} 
        class={`text-white rounded-full m-4 w-[13rem] h-12`}
        style={`background-color: ${backgroundcolor}; color: ${textcolor}`}
    >
        {content}
    </button> 