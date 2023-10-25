
const leitor = require("readline-sync")

//Exercicio 1:

let nome = leitor.question("Qual o seu nomne?");
let cor = leitor.question ("Qual sua cor favorita?");

console.log ("A cor favorita de" ,nome  ,"e", cor  )

console.log (`A cor favorita de ${nome} é a ${cor}`)

//Exercicio 2:
const leitor = require("readline-sync") 

let frase = leitor.question("Insira uma frase: ");

console.log(frase.toUpperCase(),frase.replaceAll("o","i"),frase.length);


console.log (novaFrase)

//Exercicio 3 
const rassa = ("raça1","raça2","raça3","raça4","raça5")
let escolha = leitor.questionint("Escolha uma raça de 0 a 4:") 
console.log ("A rassa escolhida foi:", raças[num])


//Exercicio 4
 
const sequence = [1,2,3,4,5,6];
console.log = (sequence);

console.log("O tamanho Arrey ",sequence.length);
console.log("adicionou o 7:");
sequense.push(7);
console.log (sequence);

console.log ("renomeou 4 e 5")
sequence.splice(n,2);
console.log (sequence,"tamanho Array",sequence.length);
