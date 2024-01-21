function calCulate(){
    let keys = document.querySelectorAll(".key");
    let display_Input = document.querySelector(".display .input");
    let display_Output = document.querySelector(".display .output");

    let input ="";
    for(let key of keys){
        key.value = key.dataset.key;
        key.onclick = function(){
            cleanInput(input);
            if(key.value =="clear"){
                input ="";
                display_Input.textContent ="";
                display_Output.textContent ="";
            }else if(key.value =="backspace"){
                input = input.slice(0, -1);
                display_Output.textContent = input;
            }else if(key.value == "="){
                let result = eval(input);

                display_Output.textContent = result;
                cleanOutput(result);
            }else if(key.value == "brackets"){
                if(
                    input.indexOf("(") == -1 || 
                    input.indexOf("(") != -1  && 
                    input.indexOf(")") != -1 && 
                    input.lastIndexOf("(") > 
                    input.lastIndexOf(")")){
                    input += "(";
                }else if(
                    input.indexOf("(") != -1 && 
                    input.indexOf(")") == -1 || 
                    input.indexOf("(") !=-1 && 
                    input.indexOf(")") != -1 && 
                    input.lastIndexOf("(") > 
                    input.lastIndexOf("(")){

                    input += ")";
                }
                display_Input.textContent = input;
            }else {
                input += key.value;
                display_Input.textContent = input;
            }
        }
    }


    function cleanOutput() {
    let output = display_Output.textContent;
    if (output.length > 3) {
        let formattedOutput = addCommas(output); 
        display_Output.textContent = formattedOutput; 
    }
}
function addCommas(value) {
    let valueString = value.toString();
    let result = "";
    let count = 0;
    for (let i = valueString.length - 1; i >= 0; i--) {
        result = valueString[i] + result;
        count++;
        if (count % 3 === 0 && i !== 0) {
            result = "," + result;
        }
    }
    return result;
}
}

function cleanInput (input) {
    let input_Array = input.split("");
    let input_Array_Length = input_Array.length;

    for (let i = 0; i < input_Array_Length; i++){
        if(input_Array[i] == "*"){
            input_Array[i] = `<span class="operator">*</span>`;
        }else if(input_Array[i] == "/"){
            input_Array[i] = `<span class="operator">/</span>`;
        }else if(input_Array[i] == "+"){
            input_Array[i] = `<span class="operator">+</span>`;
        }else if(input_Array[i] == "-"){
            input_Array[i] = `<span class="operator">-</span>`;
        }else if(input_Array[i] == "("){
            input_Array[i] = `<span class="brackets">(</span>`;
        }else if(input_Array[i] == ")"){
            input_Array[i] = `<span class="brackets">)</span>`;
        }else if(input_Array[i] == "%"){
            input_Array[i] = `<span class="percent">%</span>`;
        }
    }

    input_Array.join("");
}


calCulate();