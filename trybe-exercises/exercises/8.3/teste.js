const numerosAleatorios = [56 , 64 , 87 , 12 , 34 , 49];

const pegarMaior = (maior, number) => ((maior > number) ? maior : number);
// const pegarMaior = (maior, number) => maior + number;

const maioral = numerosAleatorios.reduce(pegarMaior, 0);
console.log(maioral);