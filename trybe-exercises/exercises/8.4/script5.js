const assert = require('assert');
const { AsyncResource } = require('async_hooks');
const { get } = require('http');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((accumulator, currentValue) => 
  accumulator + currentValue.split('').reduce((accu, current) => {
    if (current === 'a' || current === 'A') return accu +1;
  return accu
  }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);