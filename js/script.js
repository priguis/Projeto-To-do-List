// criando valores para manipula-los


const botaoAdd = document.getElementById("ativaBotao");

const lista = document.getElementById("lista");

const erro = document.querySelector(".meu-erro");

const btnFeito = document.querySelector(".bnt1");

const btnExcluir = document.querySelector(".bnt2");

// Adicionando eventos através de funções ~ Criamos um "click"

botaoAdd.addEventListener("click", function (evento) {
    evento.preventDefault();

    console.log('botao clicado');

    // puxando um elemento do HTML, e criando uma variável em cima desse elemento

    const inputUsuario = document.getElementById("novaTarefa");

    //mensagem de erro caso o usuário não preencha o input

    let mensagem = inputUsuario.value;

    if (mensagem.trim() === "") {

        erro.textContent = "Informe a nova tarefa";

    } else {
        erro.textContent = "";
        // criando um elemento HTML através do JS e estilizando por aqui

        let novoItem = document.createElement("div");
        lista.appendChild(novoItem);
        novoItem.classList.add("novoItem");

        // incluindo um elemento criado em divs que já existe no nosso HTML

        let tarefa = document.createElement("p");
        tarefa.textContent = mensagem;
        novoItem.appendChild(tarefa);
        tarefa.classList.add("tarefaColor");

        tarefa.addEventListener("click", function () {
            if (tarefa.classList.contains("feito")) {
                tarefa.classList.remove("feito")
            } else {
                tarefa.classList.add("feito");
            }
        })
        // removendo item que o usuário criou

        let xDesfazer = document.createElement("span");
        xDesfazer.textContent = "x";
        novoItem.appendChild(xDesfazer);
        // puxando o item de remover e criando um click em cima do mesmo
        xDesfazer.addEventListener("click", function () {
            lista.removeChild(novoItem);
        })

        btnFeito.addEventListener("click", function (evento) {
            evento.preventDefault();

            if (tarefa.classList.contains("feito")) {
                tarefa.classList.remove("feito")
            } else {
                tarefa.classList.add("feito");
            }
        })

        btnExcluir.addEventListener("click", function (evento) {
            evento.preventDefault();
            lista.removeChild(novoItem);
        })

        inputUsuario.value = "";

        // Atributos para pegar item, arrastar item e recolocar item... "true" Valor Boleano...

        tarefa.setAttribute("draggable", true);
        novoItem.setAttribute("draggable", true);
        xDesfazer.setAttribute("draggable", true);
        // Criando uma variável e aplicando o dragstart, drangover e drangend para pegar, segurar e mover o item
        let dragging

        lista.addEventListener("dragstart", function (ev) {
            dragging = ev.target.closest(".novoItem");

        })


        lista.addEventListener("dragover", function (ev) {
            ev.preventDefault();
            const situation = ev.target.closest(".novoItem");
            this.insertBefore(dragging, situation);
        })


        lista.addEventListener("dragend", function () {
            dragging = null;
        })
    }
});