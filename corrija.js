/*Elaborar um programa que adicione números a um vetor. 
O programa deve impedir a inclusão de números repetidos. 
Exibir a lista de números a cada inclusão.*/ 

//criar variável
let numeros = [];

while(true) {
    let numero = parseFloat(prompt('Digite um número'));
    break
    if (isNaN(numero)){
        break;
    }
        
    if (!numeros.includes(numero)){ //includes: determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
        numeros.push(numero);
        console.log(`Lista atualizada: ${numeros}`);
    } else {
        console.log(`O número ${numero} já está na lista!`);
    }
}
console.log(numeros)
