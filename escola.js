const leitor = require("readline-sync")

exercicio 1:

let idade = leitor.questionInt("ensira um numero")
let idadeA = leitor.questionInt("ensira a idade de seu amigo(a) ")

console.log("sua idade e maior a do seu amigo (a) ", idade > idadeA);
console.log("a diferenca de idade ", idade - idadeA, "anos");

exercicio 2:
let par = leitor.questionInt("ensira um numero par")

console.log(par % 2 ), 


exercicio 3:

console.log("sua idade em meses ", idade * 12);
console.log("sua idade em dias ", idade * 12 * 30);
console.log("sua idade em horas ", idade * 12 * 30 * 24);


exercicio 4:

let n1 = leitor.questionInt("ensira um numero")
let n2 = leitor.questionInt("ensira outro numero")

console.log("o primeiro numero e maior que o segundo? ", n1 > n2);
console.log("o primeiro numero e igual ao segundo? ", n1 == n2);
console.log("o primeiro numero e divisivel pelo segundo? ", (n1 % n2) == 0);
console.log("o primeiro numero e divisivel pelo primeiro? ", (n2 % n1) == 0);




