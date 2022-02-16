// Exercícios de interpretação de códigos:

// Resultado 1 = false,
// pois a const de bool1 é diferente de bool2

// Resultado 2 = false,
// pois a const bool3 diz que é diferente da bool2
// logo a bool2 que é false e a bool3 é true
// então true false true, são diferente

// Resultado 3 = true,
// o !resultado é a nova variante do resultado anterior
// como tem ! fica contrário então se a anterior era false essa é verdadeira
// e bool1 || bool2 sempre prevalece a true então true com true é true

// O tipo da variável é boolean, pois se trata de true ou false

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = (primeiroNumero + segundoNumero);

console.log(soma);

console.log(typeof primeiroNumero, typeof segundoNumero,);

// Havia um problema de typeof das variáveis que estavam
// sendo lidas como string, e no caso a const soma juntava
// as duas palavras. 
// Mas quando muda de typeof string para number, a soma de fato
// soma os dois número que mudaram de string para number.

// Exercícios de escrita de códigos:

// Ex1

let idade1 = Number(prompt("Qual a sua idade?"));
let idade2 = Number(prompt("Qual a idade do seu melhor amigo ou amiga"));


console.log("Sua idade é maior do que a do seu melhor amigo?" , idade1 > idade2);

console.log("A diferença de idade entre você e seu amigo ou amiga é:" , idade1 - idade2);

// Ex2 

let num1 = Number(prompt("Por favor, insira um número par!"));
console.log("O resto da divisão desse número por 2 é:" , num1 % 2)


//O resultado é sempre 0 quando divido por números pares.

//O resultado é sempre 1 quando divido por números ímpares.

let floco = +(prompt("Por favor, insira sua idade em anos:"));

console.log("Sua idade em meses é:" , floco * 12);
console.log("Sua idade em dias é:" , floco * 365);
console.log("Sua idade em horas é:" ,floco * 8760);

let flambers = +(prompt("Insira um número:"));
let flambers1 = +(prompt("Insira outro número:"));

console.log("O primeiro número é maior que o segundo?" , flambers > flambers1);
console.log("O primeiro numero é igual ao segundo?" , flambers === flambers1);
console.log("O primeiro numero é divisível pelo segundo?" , (flambers % flambers1) === 0);
console.log("O segundo numero é divisível pelo primeiro?" , (flambers1 % flambers) === 0);
