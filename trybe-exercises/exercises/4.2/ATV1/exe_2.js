// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for(let counter = 0; counter < groceryList.length; counter += 1) {
//   console.log(groceryList[counter])
// }
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let nameList of names) {
//   console.log(nameList);
// }

// PRINCIPAIS
// ATV 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let total = 0;
// for(counter = 0; counter < numbers.length; counter += 1) {
// total += numbers[counter];
// }
// let media = total / numbers.length;
// console.log(media);
// if (media > 20) {
//   console.log("Média maior que 20");
// } else {
//   console.log("Média menor que 20");
// }
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maioral = numbers[0];
// for (counter = 0; counter < numbers.length; counter += 1) {
//   if(numbers[counter] > maioral) {
//     maioral = numbers[counter];
//   }
// } console.log(maioral);
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impares = 0;

// for (counter = 0 ; counter < numbers.length; counter += 1) {
//   if (numbers[counter] % 2 != 0) {
//     impares += 1;
//   }
// }
// if (impares === 0 ) {
//   console.log("Nenhum número impar foi encontrado.");
// } else {
//   console.log(`O valor é de ${impares} numeros impares.`);
// }
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorzito = numbers[0];

// for(counter = 0; counter < numbers.length; counter += 1) {
//   if(numbers[counter] < menorzito) {
//     menorzito = numbers[counter];
//   }
// }
// console.log(menorzito);

let array = [];

for(counter = 0; counter <= 25; counter += 1) {
  array.push(counter)
}
console.log(array);
for (let counter = 0; counter < array.length; counter += 1) {
  console.log(array[counter] / 2);
}