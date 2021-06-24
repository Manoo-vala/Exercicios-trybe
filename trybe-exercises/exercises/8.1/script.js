// Ao chamar a função doingThings:


// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
// const wakeUp = () => { return 'Acordando!!';}
// const breackFast = () => { return 'Bora tomar café!!';}
// const sleep = () => { return 'Partiu dormir!!';}
// const doingThings = (func) => func();

// console.log(doingThings(breackFast)); 

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const formsContrat = (nomeCompleto) => {
//   const email = nomeCompleto.toLowerCase().split(' ').join('_');
//   return {nomeCompleto, Email:`${email}@trybe.com`}
// }
// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   }
//   return employees;
// };
//   console.log(newEmployees(formsContrat));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// const aposta = 2
// const sorteio = (numeroSorte, verificador) => {
//   numeroSorte = Math.round(Math.random()* 5);
//   verificador = aposta;
//   if (verificador === numeroSorte) {
//     return 'Parabéns, Você ganhou!';
//   } else {
//     return "Tente novamente, imbecil";
//   }
// }

// console.log(sorteio());


// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const returnAction = action(rightAnswers[i], studentAnswers[i]);
    counter += returnAction;
  }
  return `Resultado final: ${counter} corretas`;
}

console.log(repeat(rightAnswers, studentAnswers, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0
  }
  return 0.5;
}));