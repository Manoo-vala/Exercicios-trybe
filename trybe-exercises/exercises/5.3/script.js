function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day friday holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

function holidayColor() {
  let buttonfunction = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'green';

  buttonfunction.addEventListener('click', function() {
    for (i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === newColor) {
        getHolidays[i].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[i].style.backgroundColor = newColor;
      }
    }
  })
};

holidayColor();

function fridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.id = newButtonID;
  newButton.innerHTML = buttonName;
  buttonContainer.appendChild(newButton);

}
fridayButton('Sexta-feira');

function fridaysFunction(fridaysArray) {
  let fridayFunction = document.querySelector('#btn-friday');
  let getFridays = document.getElementsByClassName('day friday');
  let newFridayText = 'SEXTOU O/';

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1 ) {
      if (getFridays[index].innerHTML != newFridayText) {
        getFridays[index].innerHTML = newFridayText;
      } else {
        getFridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
}
let diasFriday = [ 4, 11, 18, 25 ];
fridaysFunction(diasFriday);
