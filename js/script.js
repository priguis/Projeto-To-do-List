// colocando valores em em novas variáveis
const botaoAdd = document.getElementById("ativaBotao");

const lista = document.getElementById("lista");

const erro = document.querySelector(".meu-erro");

const btnFeito = document.querySelector (".bnt1");

const btnExcluir = document.querySelector (".bnt2");

const btnRemover = document.querySelector (".bnt3");

//adicionando evento ao botão "adicionar"
botaoAdd.addEventListener("click", function (evento) {
    evento.preventDefault();

    console.log('botao clicado');

    let inputUsuario = document.getElementById("novaTarefa");

    let mensagem = inputUsuario.value;

    let inputCategoria = document.getElementById("novaCategoria");

    let etiqueta = inputCategoria.value;
    //mensagem de erro caso você nao inserir o texto
    if (mensagem.trim() === "" || etiqueta.trim() === "") {
       
        erro.textContent = "Informe a nova tarefa";

    } else {
        erro.textContent = "";

        let novoItem = document.createElement("div");
        lista.appendChild(novoItem);
        novoItem.classList.add("novoItem");

        let tarefa = document.createElement("p");
        tarefa.textContent = mensagem; 
        novoItem.appendChild(tarefa);
        tarefa.classList.add("tarefaColor");

        // double click para deixar o conteudo editável

        tarefa.addEventListener("dblclick", function() {
            tarefa.classList.remove("feito")
            tarefa.setAttribute("contentEditable", true);
        })
// evento para mandar o conteudo para a lista "invisivel"
        tarefa.addEventListener("click", function () {
            if (tarefa.classList.contains("feito")) { tarefa.classList.remove("feito") 
        } else {
                tarefa.classList.add("feito");
            }
        })
        //dando vida a um novo botão

        const novaEtiqueta = document.createElement("p");
        novaEtiqueta.textContent = etiqueta;
        novoItem.appendChild(novaEtiqueta);
        novaEtiqueta.setAttribute("class", "etiqueta");


        novaEtiqueta.addEventListener("dblclick", function() {
            novaEtiqueta.setAttribute("contentEditable", true);
        })



//removendo item
        let xDesfazer = document.createElement("span");
        xDesfazer.textContent = "x";
        novoItem.appendChild(xDesfazer);

        xDesfazer.addEventListener("click", function () {
            lista.removeChild(novoItem);
        })

        btnFeito.addEventListener ("click", function (evento) {
            evento.preventDefault();

            if(tarefa.classList.contains("feito")) {                
                tarefa.classList.remove("feito")            
            } else {
                tarefa.classList.add("feito");
            }
        })
      
        btnExcluir.addEventListener("click", function(evento) {
            evento.preventDefault();
            lista.removeChild(novoItem);
        })

        btnRemover.addEventListener("click", function(evento) {
            evento.preventDefault();
            if (tarefa.classList.contains("feito")){
                lista.removeChild(novoItem);
            }            
        })
    //atributo para mover a lista aleatória mente
    //lembrando que são 3 eventos diferentes

        tarefa.setAttribute("draggable", true);
        novoItem.setAttribute("draggable", true);
        xDesfazer.setAttribute("draggable", true);

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
    inputUsuario.value = "";

    inputUsuario.value = "";
});