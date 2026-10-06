function BotaoDeleta(){
    const button = document.createElement("button");

    button.textContent = "🗑️";
    button.classList.add("button-delete");

    button.addEventListener("click", (event) => {
        const task = event.target.parentElement.parentElement;

        task.remove();
    });

    return button;
}

export default BotaoDeleta;