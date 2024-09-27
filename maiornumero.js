// Função para encontrar o maior número entre três números
function encontrarMaiorNumero() {
    // Solicitar ao usuário que insira 3 números
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    // Determinar o maior número
    let maiorNumero = numero1; // Inicializa o maior número como o primeiro

    if (numero2 > maiorNumero) {
        maiorNumero = numero2; // Atualiza se o segundo número for maior
    }
    if (numero3 > maiorNumero) {
        maiorNumero = numero3; // Atualiza se o terceiro número for maior
    }

    // Apresentar o maior número em uma mensagem de alerta
    alert("O maior número é: " + maiorNumero);
}

// Executar a função
encontrarMaiorNumero();
