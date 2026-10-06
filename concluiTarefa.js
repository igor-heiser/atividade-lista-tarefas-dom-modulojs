function BotaoConclui(){
    const botao = document.createElement("button");

    botao.textContent = "Concluir tarefa";
    botao.classList.add("botao-conclui");

    botao.addEventListener("click", (event) => {
        const tarefa = event.target.parentElement;
        const texto = tarefa.querySelector(".tarefa-text");

        texto.classList.toggle("done");
    });
    return botao;
}

export default BotaoConclui;