<script lang="ts">
    import ButtonField from "./ButtonField.svelte";
    import { parse, eval as evalAST } from 'expression-eval';

    var input = "";

    const callback = (e) => {
        if (e == '<' || e == "C" || e == "=") {
            switch (e) {
                case "<":
                    input = input.slice(0,-1)
                    break;
                case "C":
                    input = ""
                    break;
                case "=":
                    var output = evalAST(parse(input),{})
                    input = output.toString()
                    break;
                default:
                    break;
            }
        } else {
            input += e;
        }
    }    
</script>

<div class="flex justify-center items-center flex-col w-full h-full">
    <input bind:value={input} type="text" class="my-4 w-full text-xl rounded-t-lg px-4 pt-4 border-0 border-b-2 border-b-text bg-primary-medium focus:border-b-secondary focus:outline-none transition-all duration-500">
    <ButtonField callback={callback} />
</div>