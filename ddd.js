// Solicitar ao usuário que insira um código DDD
let ddd = parseInt(prompt("Digite um código de DDD:"));

// Variável para armazenar a cidade correspondente
let cidade;

// Verificar o DDD e definir a cidade
switch (ddd) {
    case 61:
        cidade = "Brasília";
        break;
    case 71:
        cidade = "Salvador";
        break;
    case 11:
        cidade = "São Paulo";
        break;
    case 21:
        cidade = "Rio de Janeiro";
        break;
    case 32:
        cidade = "Juiz de Fora";
        break;
    case 19:
        cidade = "Campinas";
        break;
    case 27:
        cidade = "Vitória";
        break;
    case 31:
        cidade = "Belo Horizonte";
        break;
    default:
        cidade = "Cidade não encontrada para o DDD informado.";
}
