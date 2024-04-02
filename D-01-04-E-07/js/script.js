// 7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.


let nota = parseFloat(prompt("Digite a nota:"));

if (nota >= 0 && nota <= 10) {
    console.log("Nota válida.");
} else {
    console.log("Nota inválida.");
}

let n1= prompt("Digite um numero: ")
if(n1 <=10){
    console.log(`O seu numero ${n1}, é valido pois está entre 0 e 10`)
}else{
    console.log(`O seu número ${n1},não é valido pois está entre 0 e 10`)
}