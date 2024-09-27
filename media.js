// Função para calcular a média das notas
function calcularMedia() {
    // Solicitar ao usuário que insira 3 notas
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    // Calcular a média aritmética
    let media = (nota1 + nota2 + nota3) / 3;

    // Exibir a média calculada
    console.log("A média aritmética é:", media.toFixed(2));

    // Verificar se a média é maior ou igual a 7
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Executar a função
calcularMedia();
