// Solicitar ao usuário que insira a velocidade permitida e a velocidade do condutor
let velocidadePermitida = parseFloat(prompt("Digite a velocidade permitida na estrada (em km/h):"));
let velocidadeCondutor = parseFloat(prompt("Digite a velocidade do condutor (em km/h):"));

// Calcular o limite superior para multas leves (20% acima da velocidade permitida)
let limiteLeve = velocidadePermitida * 1.2;

// Verificar a situação do condutor e exibir a mensagem correspondente
if (velocidadeCondutor <= velocidadePermitida) {
    console.log("Sem Multa");
} else if (velocidadeCondutor <= limiteLeve) {
    console.log("Multa Leve");
} else {
    console.log("Multa Grave");
}
