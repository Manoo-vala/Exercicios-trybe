const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const selectDoc = document.querySelector('select');
const dataSelec = document.getElementById('date');

function createOption() {
for (let i = 0; i < estados.length; i += 1) {
  let optionList = document.createElement('option');
  optionList.innerHTML = estados[i];
  selectDoc.appendChild(optionList);
  }
} createOption();

