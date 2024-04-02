// Exercício  3

var numero = parseInt(prompt("Digite um número:"));

console.log("Números pares entre 1 e " + numero + ":");

for (var i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

