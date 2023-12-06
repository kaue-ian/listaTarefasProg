/*Linkando os IDs do index.html nas variaveis*/

const tarefaDeEntrada = document.getElementById("tarefa");
const btn = document.getElementById("adicionar");
const lista = document.getElementById("tarefas");
const finalizadas = document.getElementById("finalizadas")
btn.addEventListener("click", addTarefa);
tarefaDeEntrada.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTarefa();
    }
});

/*Adicionar nova tarefa a lista*/

function addTarefa() {
    const textTask = tarefaDeEntrada.value;
    if (textTask.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
          ${textTask} <button class="excluir">\u00D7</button> <button class="finalizar">\&#10004</button>
      `;
        lista.appendChild(newTask);
        tarefaDeEntrada.value = "";

    }
}

/*Validações da tecla Enter*/

lista.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
        
    }
    if (e.target.classList.contains("finalizar")) {
        const tarefa = e.target.parentElement;
        const textTask = tarefa.innerText.split(" ")[0];
        tarefa.innerHTML = `${textTask}<button class="excluir">\u00D7</button>`;
        tarefa.style.color = 'green';
        finalizadas.appendChild(tarefa);
    }
});

/*validação tecla Enter para excluir*/

finalizadas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove()
    }
});

/*fim*/