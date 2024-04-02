// 5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.


// -Outra forma de fazer
// var numero = parseFloat(prompt("Digite um número:"));

// if (numero > 0) {
//     console.log("O número " + numero + " é positivo.");
// } else if (numero < 0) {
//     console.log("O número " + numero + " é negativo.");
// } else {
//     console.log("O número é igual a zero.");
// }


// let n1 = parseInt(prompt("Digite um número"))

// if(n1 > 0){
//     console.log("Numero positivo!")
// }else if (n1 == 0){
//     console.log("Numero é igual a zero!")
// }else {
//     console.log("Numero é negativo!")
// }

let letra = prompt("Digite uma letra:").toLowerCase();

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    console.log("É uma vogal.");
} else {
    console.log("É uma consoante.");
}