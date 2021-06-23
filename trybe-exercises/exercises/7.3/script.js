// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9 OK
// Teste se o retorno de sum(0, 0) é 0 OK
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5) OK
// // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") OK

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // // implemente seus testes aqui
// assert.throws(() => {
//   sum(4, '5')
// }, 'Error')
// const expected = sum(4, 5);
// assert.strictEqual(expected, 9, 'Resposta errada!');

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// implemente seus testes aqui
// assert.deepStrictEqual(myRemove([ 1, 2, 3, 4 ], 3), [1, 2, 4], "Error"); Array Correto
// assert.strictEqual(typeof myRemove, 'string');
// assert.deepStrictEqual(myRemove([ 1, 2, 3, 4 ], 3), [1, 2, 3, 4], "Error"); //Incorreto
// assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 4), [1, 2, 3, 4 ], "Error");

// const assert = require('assert');

// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

// const assert = require('assert');
// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// implemente seus testes aqui
// const listTest = [1, 2, 3, 4];

// assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), 3, "Error");
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], "Error");

// myRemoveWithoutCopy(listTest, 1);
// assert.strictEqual(listTest.length, 8);

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), listTest)



// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// implemente seus testes aqui

// assert.strictEqual(myFizzBuzz(29), 'fizzbuzz', 'Error: Nhee'); Erros propositais;
// assert.strictEqual(myFizzBuzz(8), 'fizz', 'Error: AEE');
// assert.strictEqual(myFizzBuzz(28), 'buzz', 'Error');
// assert.strictEqual(myFizzBuzz([666]), false, 'Error'); Acerto proposital;

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);