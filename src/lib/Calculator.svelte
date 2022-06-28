<script lang="ts">
    import ButtonField from "./ButtonField.svelte";
    import { parse, eval as evalAST } from 'expression-eval';
    import Popup from "./Popup.svelte";

    var input = "";
    var outputInput = 0;

    var PopupOpen = false;

    var answer = 0;
    var rightanswer = false;

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
                    if (output || output == 0) {
                        answer = output
                    } else {
                        console.log(output)
                    }
                    rightanswer = answer == outputInput
                    PopupOpen = !PopupOpen
                    break;
                default:
                    break;
            }
        } else {
            input += e;
        }
    }    
    const keypress = (e) => {
        if (e["key"] == "Enter") {
            callback("=")
            e.preventDefault();
        }
    }
</script>

<div class="flex justify-center items-center flex-col w-full h-full">
    <div class="w-8/12 grid grid-cols-4 grid-flow-row">
        <p class="flex items-center whitespace-nowrap">Voer een som in: </p>
        <input on:keypress={keypress} bind:value={input} type="text" class="col-span-3 my-4 mx-2 w-full text-xl rounded-t-lg px-4 pt-4 border-0 border-b-2 border-b-text bg-primary-medium focus:border-b-secondary focus:outline-none transition-all duration-500">
        
        <p class="flex items-center whitespace-nowrap">Zelf berekende uitkomst: </p>
        <input on:keypress={keypress} bind:value={outputInput} type="number" class="col-span-3 my-4 mx-2 w-full text-xl rounded-t-lg px-4 pt-4 border-0 border-b-2 border-b-text bg-primary-medium focus:border-b-secondary focus:outline-none transition-all duration-500">
    </div>
    <ButtonField callback={callback} />
    <Popup bind:open={PopupOpen} bind:answer={answer} bind:input={outputInput} bind:rightanswer={rightanswer}  />
</div>