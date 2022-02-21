//Exercícios de interpretação de códigos

//Ex1
//A) Uma função com o nome minha função com um parametro que retorna o parâmetro multiplicado por 5;
//   logo ele imprime no console a função com um valor para usar com a função, primeiro é 2, ou seja, 2 * 5 = 10;
//   depois ele imprime outra vez com o valor 10, 10 * 5 = 50;

//B) Não sairia nada, pois ele não pediu para imprimir;

//Ex2 
//A) A função diminui os textos com caracteres maiúsculos e menciona true ou false em boolean para caso os caracteres cenouras estejam inclusos no que for digitado pelo usuário;
//B) i. eu gosto de cenoura true;
//   ii. cenoura é bom pra vista true; 
//   iii. cenouras crescem na terra false;

//Exercícios de escrita de códigos

//Ex1
//A)

function dados(nome, age, city, study){
    console.log(`Eu sou ${nome}, tenho ${age} anos, moro em ${city} e ${study} um estudante.`)
    
}

const nome = prompt('Qual é seu nome?')
const age = +prompt('Quantos anos você tem?')
const city = prompt('Qual cidade você mora?')
const study = prompt('Diga se você é ou não um estudante com sou ou não sou:')

dados(nome, age, city, study)

// Ex2
// A)
// Obs: Primeiro criar função, segundo criar o que a função deve fazer com uma variável, terceiro, caso seja pedido retornar
// Obs: Quarto, criar outra variável para rodar com a função já criada e imprimir esta variável, pois não irá rodar a variável dentro da função.

//ADIÇÃO
function somatoria(a, b){
    const somar = a + b
    return somar
}

const somar1 = somatoria(1, 2)
console.log(somar1)

//SUBTRAÇÃO
function diferenca(a, b){
    const subtrair = a - b
    return subtrair
}

const subtrair1 = diferenca(2, 1)
console.log(subtrair1)


//MULTIPLICAÇÃO
function multiplicacao(a, b){
    const multiplicar = a * b
    return multiplicar
}

const multiplicar1 = multiplicacao(2, 3)
console.log(multiplicar1)

//DIVISÃO
function divisao(a, b){
    const dividir = a / b
    return dividir
}

const dividir1 = divisao(10, 2)
console.log(dividir1)

//B)
//MAIOR OU IGUAL
function boolean(a, b){
    console.log(a >= b)
}

const boolean1 = boolean(7, 1)
console.log(boolean1)

//C)
function booleanpar(par){
    return par % 2 === 0
}

const booleanpar1 = booleanpar(10)
console.log(booleanpar1)

//D)

function mensagem(gaules){
    const mensagem1 = gaules .upTowerCase()
    const tamanho = mensagem1 .lenght
    console.log(mensagem1, tamanho)
}

mensagem('Tá muito difícil isso aqui meu Santo Senhor Jesus')

// Ex3

// alert('Olá, vamos fazer operações matemática?')
// alert('Preciso que digite nos próximos passos dois números para somar, subtrair, multiplicar e dividir!')
// let numero1 = +prompt('Digite o primeiro número:')
// let numero2 = +prompt('Digite o segundo número:')
// alert('O primeiro resultado é a soma dos dois números')
// alert('O segundo resultado é a subtração dos dois números')
// alert('O terceiro resultado é a multiplicação dos dois números')
// alert('O quarto resultado é a divisão dos dois números')

// function somatoria(num1, num2){
//     const somar1 = numero1 + numero2
// }

// const resultadoSoma = somatoria(num1, num2)
// console.log(resultadoSoma)

// function diferenca(num1, num2){
//     const subtrair = num1 - num2
//     return subtrair
// }

// const subtrair1 = diferenca(num1, num2 )
// console.log(subtrair1)

// function multiplicacao(num1, num2){
//     const multiplicar = num1 * num2
//     return multiplicar
// }

// const multiplicar1 = multiplicacao(2, 3)
// console.log(multiplicar1)

// function divisao(num1, num2){
//     const dividir = num1 / num2
//     return dividir
// }

// const dividir1 = divisao(10, 2)
// console.log(dividir1)