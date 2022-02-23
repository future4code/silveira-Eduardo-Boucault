// ! Exercícios de interpretação de códigos:

//Ex1
// ? P: O que o código abaixo está fazendo? Qual o resultado impresso no console?
// * r: O código está somando 1 a partir de zero até o número menor que 5. Ele irá imprimir: 1,2,3,4.

//Ex2
// A)
// ? P: O que vai ser impresso no console?
// * r: 19, 21, 23, 25, 27, 30

// B)
// ? P: Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// * r: Só acertei por que o professor ajudou no plantão :(

// let mostrarIndice = 0

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero, "indice", indice)
// 	}
//     mostrarIndice++
// }

//Ex3

// A)
// ? P: Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// * r: Irá imprimir 4 linhas com 1 asterisco na primeira, 2 asteriscos na segunda, 3 asteriscos na terceira e 4 asteriscos na quarta linha.

// ! Exercícios de escrita de códigos:

//Ex1

let listaPet = []

let quantidadePet = +(prompt('Quantos bixinhos de estimação você possue?'))

if (quantidadePet === 0) {
    console.log('Que pena, você pode adotar um pet!')
} else {
    for (let i = 0; i < quantidadePet; i++) {
        listaPet.push(prompt('Digite o nome de seus pets:'))
    }
    console.log(listaPet)
}

//Ex2

