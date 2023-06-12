<script lang="ts"> 
    import type { Tutorial } from "../[tutorial]/page"

    export let data: Tutorial;

</script>


<main>
    <div id="Lang Pages">
        {data.topic} Tutorial
    </div>
    <div id="Content">
    </div>
</main>