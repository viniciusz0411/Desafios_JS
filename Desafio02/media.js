// Desafio 02 - Média da turma

/* 
    Crie um array [] com 5 notas
    Mostrar no console a média da turma.
*/
let soma=0
const notas=[6,7,3,2,6]
for (const numero of notas) {
  soma += numero;
}
console.log(`As notas da turma são: ${notas}.
A média é ${soma/notas.length}`)