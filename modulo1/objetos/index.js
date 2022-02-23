//Interpretação de códigos

//Ex1 A)

//Matheus Nachtergaele
//61
//Globo 14h

//Ex2 A)
// Cachorro
// Juca
// 3
// SRD

// Gato
// Juba
// 3
// SRD

// Tartaruga
// Jubo 
// 3 
// SRD

//B) Copia o objeto anterior por completo.

//Ex3 A) Falso, indefinido.

//B) O console log backender vai imprimir falso e o console log altura não existe dentro do objeto então a função dará indefino.

//Exercícios de escrita de códigos.

//Ex1 A)

const pessoa = {
    nome: ('Eduardo'),
    apelidos: ['Du', 'Dudu', 'Edu'],
}

function imprimirFrase(objeto){
    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
}
console.log(imprimirFrase(pessoa))

//B)

const pessoa2 = {...pessoa, apelidos: ['Dudis', 'Sanduba', 'Duduzinho']}
console.log(imprimirFrase(pessoa2));

//Ex2 A)

const objeto1 = {
    nome:'Eduardo',
    idade:'29',
    profissao:'Enfermeiro'
}

const objeto2 = {
    nome:'Lucas',
    idade:'27',
    profissao:'Mecanico'
}

//B)

function retornarArray(objeto){
    const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return array
}

console.log(retornarArray(objeto1));
console.log(retornarArray(objeto2));

//Ex3 A)

const carrinho = []
const frutas1 = {
    nome: 'Goiaba',
    disponibilidade: true
}
const frutas2 = {
    nome: 'Uva',
    disponibilidade: true
}
const frutas3 = {
    nome: 'Manga',
    disponibilidade: true
}

function sacolaofrutas(objeto){
    carrinho.push(objeto)
}

sacolaofrutas(frutas1)
sacolaofrutas(frutas2)
sacolaofrutas(frutas3)

console.log(carrinho)