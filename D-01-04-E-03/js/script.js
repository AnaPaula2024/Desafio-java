// 3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

// var numero = parseInt(prompt("Digite um número:"));

// if (numero % 2 === 0) {
//     alert(numero + " é um número par.");
// } else {
//     alert(numero + " é um número ímpar.");
// }

// let num = parseInt(prompt("Digite um número:"));

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

let num = parseInt(prompt("Digite um número para exibir a tabuada:"));

for (let i = 1; i <= 20; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}