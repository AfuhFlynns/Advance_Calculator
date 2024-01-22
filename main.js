function calCulate(){
    let keys = document.querySelectorAll(".key");
    let display_Input = document.querySelector(".display .input");
    let display_Output = document.querySelector(".display .output");

    let input ="";
    for(let key of keys){
        key.value = key.dataset.key;
        key.onclick = function(){
            cleanInput(input);
            validateInput(input);
            if(key.value =="clear"){
                input ="";
                display_Input.textContent ="";
                display_Output.textContent ="";
            }else if(key.value =="backspace"){
                input = input.slice(0, -1);
                display_Output.textContent = input;
            }else if(key.value == "="){
                let result = math.evaluate(input);
                 arrange_Display(result);
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

}

function cleanInput (input) {
    let input_Array = input.split("");
    let input_Array_Length = input_Array.length;

    for (let i = 0; i < input_Array_Length; i++){
        if(input_Array[i] == "*"){
            input_Array[i] = `<span id="operator">*</span>`;
        }else if(input_Array[i] == "/"){
            input_Array[i] = `<span id="operator">/</span>`;
        }else if(input_Array[i] == "+"){
            input_Array[i] = `<span id="operator">+</span>`;
        }else if(input_Array[i] == "-"){
            input_Array[i] = `<span id="operator">-</span>`;
        }else if(input_Array[i] == "("){
            input_Array[i] = `<span id="brackets">(</span>`;
        }else if(input_Array[i] == ")"){
            input_Array[i] = `<span id="brackets">)</span>`;
        }else if(input_Array[i] == "%"){
            input_Array[i] = `<span id="percent">%</span>`;
        }
    }

    input_Array.join("");
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
        }else if(result.includes(".")|| result.includes("-")){
            return result = value;
        }for(let i = 20; valueString.length >=i; i++){
            let size = 30;
            let results = document.getElementById("results");
            results.style.fontSize = `${size}px`;
            if(valueString.length > 20){
                results.style.fontSize = `${size -3}px`;
            }else if(valueString.length > 26){
                results.style.fontSize = `${size -6}px`;
            }
        }
    }
    return result;
}

function validateInput (value) {
    let last_Input = value.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if(value == "." && last_Input == "."){
        return false;
    }
    if(operators.includes(value)){
        if(operators.includes(last_Input)){
            return false;
        }else{
            return true;
        }
        return true;
    }
}

function arrange_Display(results){
}

calCulate();