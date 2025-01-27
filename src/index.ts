interface Todo {
    text: string;
    completed: boolean; 
}

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")! as HTMLUListElement;
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

const todos: Todo[] = []; 

function handleSubmit(e: SubmitEvent){
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo); 
    input.value = ""; 
}

function createTodo(todo: Todo) {
    const newLI = document.createElement("li"); 
    const checkbox = document.createElement("input"); 
    checkbox.type = "checkbox"; 
    newLI.append(todo.text); 
    newLI.append(checkbox); 
    list.append(newLI); 
}

form.addEventListener("submit", handleSubmit);