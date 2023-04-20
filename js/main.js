const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const calculateBtn = document.querySelector(".calculate-btn");
const result = document.querySelector(".result");
const operation = document.querySelector(".operation");

console.log(operation.value);
calculateBtn.addEventListener("click", function () {
    if (input1.value === "" || input2.value === "") {
        window.alert("請輸入數字")
        return;
    }
    let input1Num = input1.valueAsNumber;
    let input2Num = input2.valueAsNumber;
    let operator = operation.value;
    let answer = 0;
    console.log(input1Num, input2Num);
    // if (operator === "add") {
    //     answer = (input1Num + input2Num);
    // }
    // if (operator === "sub") {
    //     answer = (input1Num - input2Num);
    // }
    // if (operator === "mult") {
    //     answer = (input1Num * input2Num);
    // }
    // if (operator === "div") {
    //     answer = (input1Num / input2Num);
    // }
    switch (operator) {
        case "add": {
            answer = (input1Num + input2Num);
            break;
        }
        case "sub": {
            answer = (input1Num - input2Num);
            break;
        }
        case "mult": {
            answer = (input1Num * input2Num);
            break;
        }
        case "div": {
            answer = (input1Num / input2Num);
            break;
        }
    }
    result.textContent = answer;
    return;
});
