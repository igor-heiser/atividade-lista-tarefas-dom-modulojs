# Projeto: Lista de Tarefas Modular

**Curso:** Técnico em Informática para a Internet  
**Dupla:** Igor Negherbon Heiser & Pedro Henrique Pontes

---

## Diário de Aprendizagem e Documentação do Projeto

### 1. Estrutura do DOM e Seletores

**Conceito de DOM e Nós (Explicado por Igor Negherbon Heiser):**

O DOM é uma representação da página HTML em forma de árvore. O navegador transforma cada parte do HTML em nós que podem ser acessados e modificados pelo JavaScript. Por exemplo, `document` representa o documento e elementos como `body`, `h1`, `form` e `input` são nós de elementos. Também existem nós de texto, que representam os textos dentro das tags.

**Métodos de Seleção (Explicado por Pedro Henrique Pontes):**

Os seletores são códigos que localizam elementos HTML para que o JavaScript possa alterá-los, eles funcionam como pontes para que o JavaScript encontrar e modificar tags, classes e etc. O `querySelector` seleciona o primeiro elemento que corresponde ao seletor informado. O `querySelectorAll` seleciona todos os elementos correspondentes e o `getElementById` procura um elemento pelo seu `id`. Os atributos `data-*` servem para adicionar identificadores personalizados no HTML e podem ser usados pelo JavaScript sem depender de classes usadas na estilização.

---

### 2. Eventos e Manipulação de Inputs

**Escutadores de Eventos e preventDefault (Explicado por Igor Negherbon Heiser):**

Os escutadores de Eventos são funções que ficam ouvindo as ações do usuário na página para disparar uma reação automática em JavaScript. O `addEventListener` permite executar uma função quando um evento acontece, como o envio de um formulário ou um clique. No formulário usamos `preventDefault()` para impedir o comportamento padrão do navegador, que recarregaria a página ao enviar o formulário.

**Captura e Limpeza de Inputs (Explicado por Pedro Henrique Pontes):**

A captura e limpeza de inputs é o processo de pegar uma informação e remover dados perigosos ou desnecessários antes de usar essa informação no sistema. A propriedade `.value` permite pegar o texto digitado no input. O método `.trim()` remove espaços no começo e no final do texto. Assim, podemos verificar se o usuário realmente digitou uma tarefa e impedir que uma tarefa vazia ou formada apenas por espaços seja adicionada.

---

### 3. Criação e Remoção Dinâmica de Elementos

**Criação de Nós Dinâmicos (Explicado por Igor Negherbon Heiser):**

A criação de nós dinâmicos é o processo de gerar novos elementos HTML na página usando JavaScript sem precisar ficar recarregando a tela. O `document.createElement` cria um novo elemento HTML pelo JavaScript. O `classList.add` adiciona uma classe ao elemento criado e o `appendChild` insere um elemento dentro de outro. No projeto esses recursos são usados para criar cada tarefa e colocá-la na lista.

**Navegação no DOM e Exclusão (Explicado por Pedro Henrique Pontes):**

O `parentElement` permite acessar o elemento pai de outro elemento. No botão de excluir, ele é usado para chegar até o item da tarefa. Depois, o método `.remove()` remove esse item da página.

---

### 4. Arquitetura Modular e Estilização

**Módulos JS com import e export (Explicado por Igor Negherbon Heiser):**

Dividir o JavaScript em módulos deixa o código mais organizado e facilita a reutilização das funções. O `export default` exporta uma função principal de um arquivo e o `import` permite utilizar essa função em outro arquivo. Neste projeto, os botões de excluir e concluir ficam em módulos separados e são importados pelo `app.js`.

**Integração entre JS e CSS (Explicado por Pedro Henrique Pontes):**

O JavaScript pode adicionar ou remover classes CSS dos elementos usando `classList`. No projeto, as classes são adicionadas aos elementos criados dinamicamente para aplicar a estilização. O botão de concluir também usa `classList.toggle("done")` para alternar o estado visual da tarefa entre concluída e não concluída.

---

## Funcionalidades

- Adicionar tarefas.
- Impedir tarefas vazias ou formadas apenas por espaços.
- Criar os itens dinamicamente no DOM.
- Excluir tarefas.
- Marcar e desmarcar tarefas como concluídas.
- Voltar o foco para o campo de texto depois de adicionar uma tarefa.
- Separar funcionalidades em módulos ES6.

## Arquivos do projeto

- `index.html`
- `style.css`
- `app.js`
- `deletaTarefa.js`
- `concluiTarefa.js`
- `README.md`

## Como executar

Como o projeto utiliza módulos ES6, abra a pasta com o VS Code e execute o `index.html` usando uma extensão como Live Server.