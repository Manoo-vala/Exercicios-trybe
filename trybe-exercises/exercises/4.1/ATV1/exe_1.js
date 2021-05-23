// ATV 1
// let a = 2
// let b = 8
// let c = 12
// console.log(a + b);
// console.log(b - a);
// console.log(a * b);
// console.log(b / a);
// console.log(b % a);

// ATV 2
// if (a > b) {
//   console.log("A é maior que B");
// } else {
//   console.log("B é maior que A")
// }
// if ((a > b) && (a > c)) {
//   console.log("A é o maior")
// } else if ((b > a)&&(b > c)) {
//   console.log("B é o maior")
// } else {
//   console.log("C é o maior")
// }
// let num = 0;

// ATV 3
// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// ATV 4
// let angulo1 = -90;
// let angulo2 = 55;
// let angulo3 = 35;
// let somadosangulos = angulo1 + angulo2 + angulo3;
// let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;
// if (angulosPositivos) {
//   if (somadosangulos == 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log("Angulo inválido");
// }

// ATV5
// let chessPiece = "Peão";
// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log("Uma casa pra qualquer direção");
//   break;
//   case 'dama':
//     console.log("Todas as direções, ilimitada");
//   break;
//   case 'bispo':
//     console.log("Ilimitado nas diagonais");
//   break;
//   case 'torre':
//     console.log("Ilimitado nas horizontais e verticais");
//   break;
//   case 'cavalo':
//     console.log("anda em 'L'");
//   break;
//   case 'peão':
//     console.log("Uma casa pra frente. Pode ser promovido se alcançar a base inimiga.");
// }

//ATV 6
// let nota = 80;
// if ((nota < 0) || (nota > 100)) {
//   console.log("Nota incorreta!");
// } else if (nota >= 90) {
//   console.log("A");
// } else if (nota >= 80) {
//   console.log("B"); 
// } else if (nota >= 70) {
//    console.log("C");
// } else if (nota >= 60) {
//   console.log("D");
// } else if (nota >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

//ATV 7
// let a = 5
// let b = 2
// let c = 7
// if ((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// };
// ATV 8 
// let a = 8;
// let b = 6;
// let c = 11;
// if ((a % 2 == 1) || (b % 2 == 1) || (c % 2 == 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// };

// ATV 9
// let custoProduto = 41;
// let venda = 250;
// let varCustoTotal;
// let lucro = venda - varCustoTotal;
// if (custoProduto > 0 && venda > 0){
//   let varCustoTotal = custoProduto * 1.2;
//   let vendasTotais = (venda - varCustoTotal) * 1000;
//   console.log(vendasTotais);
// } else {
//   console.log("Erro, preços equivocados.");
// };
// ATV 10

let aliquotINSS;
let aliquotIR;

let salarioLiquido = 4800;

if (salarioLiquido <= 1556.94) {
  aliquotINSS = salarioLiquido * 0.08;
} else if (salarioLiquido <= 2594.92) {
  aliquotINSS = salarioLiquido * 0.09
} else if (salarioLiquido <= 5189.82) {
  aliquotINSS = salarioLiquido * 0.11
} else {
  aliquotINSS = 570.88
}
let salarioReal = salarioLiquido - aliquotINSS;

if (salarioReal <= 1903.98) {
  aliquotIR = 0
} else if (salarioReal <= 2826.65) {
  aliquotIR = (salarioReal * 0.075) - 142.80;
} else if (salarioReal <= 3751.05) {
  aliquotIR = (salarioReal * 0.15) - 354.80;
} else if (salarioReal <= 4664.68) {
  aliquotIR = (salarioReal * 0.225) - 636.13;
} else {
  aliquotIR = (salarioReal * 0.275) - 869.36;
}
  console.log(`Sua contribuição será: ${aliquotINSS} Reais`);
  console.log(`Seu imposto de renda foi avaliado em: ${aliquotIR} Reais`);