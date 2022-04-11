<script lang="ts">
    export var item;
    export var callback;

    const callCallback = () => {
        if (callback && typeof callback === "function") {
            callback(item)
        }
    }
</script>

<button on:click={callCallback} class="rounded-full bg-secondary text-xl w-16 h-16 m-1">{item}</button>