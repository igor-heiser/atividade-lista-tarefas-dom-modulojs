function BotaoConclui(){
    const button = document.createElement("button");

    button.textContent = "Complete task";
    button.classList.add("button-finish");

    button.addEventListener("click", (event) => {
        const task = event.target.parentElement.parentElement;
        const text = task.querySelector(".task-text");

        text.classList.toggle("done");
    });

    return button;
}

export default BotaoConclui;