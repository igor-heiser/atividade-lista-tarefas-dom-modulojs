function BotaoDeleta(){
    const botao = document.createElement("button");

    botao.textContent = "Excluir";
    botao.classList.add("botao-excluir");

    botao.addEventListener("click", (event) => {
        const tarefa = event.target.parentElement;

        tarefa.remove();    
    });

    return botao;
}

export default BotaoDeleta;