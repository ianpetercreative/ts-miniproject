"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
// This is an alternative option:
// (<HTMLInputElement>input).value
// However, this second option is not useable in React, so it is less common.
// btn.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// })
// form.addEventListener("submit", function(e){
//     e.preventDefault(); 
//     console.log("submitted")
// })
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
