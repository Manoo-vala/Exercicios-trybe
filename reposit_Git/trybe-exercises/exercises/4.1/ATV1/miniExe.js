let candidataA = "aprovada";

switch (candidataA) {
  case "aprovada":
    console.log("Parabéns, você foi selecionada!");
    break;
  case "lista":
    console.log("Aguarde uma semana, entraremos em contato!");
    break;
  case "reprovada":
    console.log("Infelizmente, você foi reprovada!");
    break;
  default:
    console.log("Ocorreu um erro, tente mais tarde");
}
// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
