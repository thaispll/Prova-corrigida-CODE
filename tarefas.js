// Vetor inicial de tarefas
const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler um livro"];

// Função para listar as tarefas
function listarTarefas() {
    console.log("Tarefas:");
    for (let i = 0; i < tarefas.length; i++) {
        console.log((i + 1) + ". " + tarefas[i]);
    }
}

// Função para adicionar uma nova tarefa
function adicionarTarefa(novaTarefa) {
    tarefas.push(novaTarefa);
    console.log(`Tarefa adicionada: "${novaTarefa}"`);
    listarTarefas(); // Chama a função para listar tarefas atualizadas
}

// Função para remover uma tarefa
function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        const tarefaRemovida = tarefas.splice(indice, 1);
        console.log(`Tarefa removida: "${tarefaRemovida}"`);
        listarTarefas(); // Chama a função para listar tarefas atualizadas
    } else {
        console.log("Índice inválido! Tente novamente.");
    }
}

// Exemplo de uso
listarTarefas(); // Lista as tarefas iniciais
adicionarTarefa("Fazer uma caminhada"); // Adiciona uma nova tarefa
removerTarefa(1); // Remove a segunda tarefa (índice 1)
