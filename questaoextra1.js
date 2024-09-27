// Solicitar um número inteiro positivo ao usuário
let numero = parseInt(prompt("Digite um número inteiro positivo (menor ou igual a 10):"));

// Verificar se o número é maior que 10
if (numero > 10) {
    alert("Erro: O número digitado é maior que 10.");
} else {
    // Exibir a contagem regressiva de 10 até o número digitado
    let contagemRegressiva = "Contagem regressiva:\n";
    for (let i = 10; i >= numero; i--) {
        contagemRegressiva += i + "\n";
    }
    alert(contagemRegressiva);
}
