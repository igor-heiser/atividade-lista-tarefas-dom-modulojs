const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const list = document.querySelector("[data-list]");

import BotaoDeleta from "./deletaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const valor = input.value.trim();

    if(valor == ""){
        alert("O nome da tarefa não pode ser vazio!");
    }

    const tarefa = document.createElement("li");
    tarefa.classList.add("tarefa");

    const text = document.createElement("p");
    text.classList.add("tarefa-text");
    text.textContent = valor;

    tarefa.appendChild(text);
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    list.appendChild(tarefa);
    input.value = "";
    input.focus();
})