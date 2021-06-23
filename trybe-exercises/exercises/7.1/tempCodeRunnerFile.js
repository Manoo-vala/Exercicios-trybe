const fatorial = (numero) => {
  for (let i = 0; i < numero; i -= 1) {
    if (numero > 0) {
      numero = numero * numero
    }
    numero[i] = numero[i] -1
  }
}
console.log(fatorial(5));