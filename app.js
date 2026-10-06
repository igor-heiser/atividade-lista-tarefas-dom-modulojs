const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const list = document.querySelector("[data-list]");

import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

form.addEventListener("submit", (event) => {    
    event.preventDefault();

    const value = input.value.trim();

    if(value === ""){
        alert("ERROR: the task cannot be empty.");
        return;
    }

    const task = document.createElement("li");
    task.classList.add("task");

    const text = document.createElement("p");
    text.classList.add("task-text");
    text.textContent = value;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    task.appendChild(text);
    task.appendChild(actions);

    actions.appendChild(BotaoConclui());
    actions.appendChild(BotaoDeleta());
    
    list.appendChild(task);
    
    input.value = "";
    input.focus();
});