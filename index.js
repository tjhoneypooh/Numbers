
function subAnswer(){
const numberOne = document.getElementById('firstNumber').value;
console.log(numberOne);
const numberTwo = document.getElementById('secondNumber').value;
console.log(numberTwo);
document.getElementById('answer').value = numberOne - numberTwo;


}




// addition
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
const showAdditionAnswer = () => {
  let firstTxt = document.getElementById("addFirst").value;
  let secondTxt = document.getElementById("addSecond").value;
  let firstNum = parseInt(firstTxt);
  let secondNum = parseInt(secondTxt);

  let addAnswer = addTwoNumbers(firstNum, secondNum);

  document.getElementById("addAnswer").value = addAnswer;
};

// multiply
function multiplyBy() {
  var num1 = document.getElementById("firstBox").value;
  var num2 = document.getElementById("secondBox").value;
  document.getElementById("total").value = num1 * num2;
}

//divide
function divideBy() {
    let num1 = document.getElementById("box1").value;
    let num2 = document.getElementById("box2").value;
    document.getElementById("box3").value = num1 / num2;
  }

