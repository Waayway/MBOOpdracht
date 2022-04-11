<script lang="ts">
    export var callback;
    import Button from "./Button.svelte";

    const layout = [
        'C', '<', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '.', '0', '=', '+'
    ]
    const callCallback = (e) => {
        if (callback && typeof callback === "function") {
            callback(e)
        }
    }
</script>

<div class="grid grid-rows-5 grid-cols-4">
    {#each layout as item}
        <Button item={item} callback={callCallback}/>
    {/each}
</div>