<script lang="ts">
  import Calculator from "./lib/Calculator.svelte";
  import "./tailwind.css"
</script>

<main class="bg-primary-darker h-screen w-screen flex flex-col justify-center items-center text-text">
  <h1 class="text-xl">Calculator</h1>
  <div class="w-full h-3/4 pt-2 px-28">
    <div class="w-full h-full bg-primary-medium rounded-3xl">
      <Calculator />
    </div>
  </div>
</main>