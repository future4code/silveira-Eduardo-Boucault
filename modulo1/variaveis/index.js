let nome
let idade
console.log(typeof nome , typeof idade)

/*

EXERCÍCIO 1 d)
Ambos foram identificado como undefined
O typeof conseguiu ver que existe uma variável
Porém nelas não constam valores
Por isso mostram 2 undefineds no console.log

*/


const nome1 = prompt("Qual é o seu nome?")
let idade1 = Number(prompt("Qual a sua idade?"))

console.log(typeof nome1);
console.log(typeof idade1);

/*

EXERCÍCIO 1 f)

Quando eu atribuo um valor a variável, ela mostra corretamente o tipo que ela é
Agora por exemplo em idade, onde é um número a ser colocado, se eu deixar sem valor
O typeof entende como se fosse uma string por conta da palavra idade.

*/

console.log("Olá", nome1, "você tem", idade1, "anos");


const correr = prompt("Você gosta de correr?");
const altura = prompt("Você tem mais de 1 metro de altura?");
const peso = prompt("Você pesa mais de 300kg?");

console.log("Você gosta de correr?", correr);
console.log("Você tem mais de 1 metro de altura?", altura);
console.log("Você pesa mais de 300kg?", peso);


let a = 10
let b = 25
let c = 0


// Aqui faremos uma lógica para trocar os valores

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


//DESAFIO

const ex1 = 25;
const ex2 = 30;

console.log ("O primeiro número somado ao segundo número resulta em:" , ex1 + ex2);

console.log ("O primeiro número multiplicado pelo segundo número resulta em:" , ex1 * ex2);