const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
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

function handleSubmit(e: SubmitEvent){
    e.preventDefault();
    console.log("Submitted")
}

form.addEventListener("submit", handleSubmit);