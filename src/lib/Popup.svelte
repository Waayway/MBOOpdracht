<script lang="ts">
    import CloseIcon from "../assets/close-icon.svg"
    export let open = false;
    export let answer = 0;
    export let input = 0;
    export let rightanswer = true;
</script>

<div class="z-50 fixed w-screen h-screen top-0 left-0 p-28 pt-32 pb-24 transition-all duration-300 {open ? "scale-100": "scale-0"}">
    <div class="w-full h-full bg-primary-light rounded-3xl p-10 text-black">
        <div class="absolute right-32 top-36 cursor-pointer" on:click={() => open = !open}>
            <img src="{CloseIcon}" alt="" class="scale-150">
        </div>
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-2xl">Het antwoord is: {answer.toString()}</h1>
            <h1 class="text-2xl">Uw antwoord was: {input.toString()}</h1>
            <h1 class="text-2xl {rightanswer ? "text-green-700": "text-red-700"}">{rightanswer ? "U had het goed!": "Sorry dat klopt niet."}</h1>
        </div>
    </div>
</div>