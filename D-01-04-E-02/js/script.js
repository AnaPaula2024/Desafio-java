// 2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.

let num = parseInt(prompt("Digite um número:"));

if (num % 2 === 0) {
    alert("O número é par.");
} else {
    alert("O número é ímpar.");
}

