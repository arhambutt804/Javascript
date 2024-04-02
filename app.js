const calculateBtn = document.getElementById("calculate");
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;
function convert(){
    if(toFahrenheit.checked){
        temp = (parseFloat(textBox.value) * 9/5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked){
        temp = (parseFloat(textBox.value) - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}


















// let fullname = "Arham Atique";
// let age = 21;
// let isStudent = true;

// document.getElementById("p1").textContent = `My name is ${fullname}`;
// document.getElementById("p2").textContent = `I am ${age} years old`;
// document.getElementById("p3").textContent = `I am ${isStudent ? "a student" : "not a student"}`;
// const increaseBtn = document.getElementById("increaseBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const counter = document.getElementById("counter");

// let count = 0;

// increaseBtn.onclick = function () {
//     count++;
//     counter.textContent = count;
// }

// decreaseBtn.onclick = function () {
//     count--;
//     counter.textContent = count;
// }

// resetBtn.onclick = function () {
//     count = 0;
//     counter.textContent = count;
// }
