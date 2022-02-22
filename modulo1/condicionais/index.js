//Exercícios de interpretação de códigos
//Ex1 A)
//Condiciona duas situações para uma ação, se o resto de uma divisão por 2 é ou não igual a zero;

//B) Múltiplos de 2;

//C) Para números que não são múltiplos de 2;

//Ex2 A)
// Quantificar o preço das frutas disponíveis no sistema;

//B) 2,25

//C) O preço da fruta Pêra é R$ 5;

//Ex3 A)
// Pedindo ao usuário que digite um número;

//B) P: Considere um usuário digitou o número 10. Qual será a mensagem do terminal?;
//   R: Esse número passou no teste;
//   P: E se fosse o número -10?;
//   R: Não vai aparecer nada pois a variável não está fora do escopo ou declarada;

//C) P: Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo;
//   R: A let está dentro do escopo do if e não foi declarada, então ela não tem valor, portanto não aparecerá;

//Exercícios de escrita de códigos

//Ex1 A)

const idade = +prompt('Qual é a sua idade?');

//B) const idade = Number(prompt('Qual é a sua idade?'))

//C)

if(idade >= 18){
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}

// Ex2 A)

const periodoAluno = prompt(`Qual período do dia você estuda? Por favor digitar M para (matutino), V para (Vespertino) ou N para (Noturno)`);

let periodoM = 'M';
let periodoV = 'V';
let periodoN = 'N';

if (periodoM) {
    console.log("Bom dia")
} else if (periodoV) {
    console.log("Boa tarde")
} else if (periodoN) {
    console.log("Boa noite")
}

// Ex3 A)

const periodoAluno = prompt(`Qual período do dia você estuda? Por favor digitar M para (matutino), V para (Vespertino) ou N para (Noturno)`);

switch(periodoAluno){
    case 'M':
    console.log('Bom dia!')
    break
    case 'V':
        console.log('Boa tarde!')
        break
        case 'N':
            console.log('Boa noite!')
}

//Ex4 A)

const generoFilme = prompt('Qual o gênero de filme você irá assistir?');
const precoFilme = +prompt('Qual o preço do ingresso do filme que você irá assistir?');

if(generoFilme === "fantasia" && precoFilme < 15){
    console.log('Bom filme')

} else {
    console.log('Escolha um outro filme :(')
}

