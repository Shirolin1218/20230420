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
    console.log(input1Num, input2Num);
    if (operator == "add") {
        let answer = input1Num + input2Num;
        result.textContent = answer;
        return;
    }
    if (operator == "sub") {
        let answer = input1Num - input2Num;
        result.textContent = answer;
        return;
    }
    if (operator == "mult") {
        let answer = input1Num * input2Num;
        result.textContent = answer;
        return;
    }
    if (operator == "div") {
        let answer = input1Num / input2Num;
        result.textContent = answer;
        return;
    }
});
