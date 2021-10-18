'use strict';
/* function printhello(firstName, lastName) {
  firstName = firstName || "пользователь";
  lastName = lastName || "тестовый";
  var greeting = "добрый день";
  var fullName = firstName + " " +   lastName;
  alert(greeting + "," + fullName + "!");
}
var myfirstName = "Vanya";
var mylastName = "Petrov";
printhello(myfirstName, mylastName); */

/* ДЗ1 
let num1 = parseInt(prompt("первое число:")) ;
let num2 = parseInt(prompt("второе число:")) ;
if (num2>num1) {
  alert("второе число больше");
} else if (num1>num2) { alert("первое число больше");
  
} else if (num2=num1) {
  alert("числа равны");
} else  alert("введите корректное значение"); */

/* ДЗ2
let input,
  random = Math.floor(Math.random() * 10);
while ((input = prompt('Введите число от 0 до 9:'))) {
  if (isNaN(input)) alert('Введите число!');
  else if (input > random) alert('Меньше!');
  else if (input < random) alert('Больше!');
  else if (input == random) {
    alert('Правильно!');
    break;
  }
}
 */

/* var car2 = {
  mark: 'mers',
  year: 2012,
  model: 'slr',
};
function pop(obj) {
  for (const prop in obj) {
    if (Obj.hasOwnProperty(prop)) {
      const propval = obj[prop];
      console.log(prop + ':' + propval);
    }
  }
}
var car3 = {};
for (const prop in car2) { 
  const propval = car2[prop];
  car3[prop] = propval;
} */

/* debugger;
function myFunc() {
  var localvar = 'hello',
    anlocvar = 2017;
}
var globvar = 1000;
myFunc();
 */
/* ДЗ3-1 var d = new Date(),
  Year = d.getFullYear(),
  Month = d.getMonth(),
  Day = d.getDate(),
  Hour = d.getHours(),
  Minutes = d.getMinutes(),
  Seconds = d.getSeconds();
// Преобразуем месяца
switch (Month) {
  case 0:
    Month = 'января';
    break;
  case 1:
    Month = 'февраля';
    break;
  case 2:
    Month = 'марта';
    break;
  case 3:
    Month = 'апреля';
    break;
  case 4:
    Month = 'мае';
    break;
  case 5:
    Month = 'июня';
    break;
  case 6:
    Month = 'июля';
    break;
  case 7:
    Month = 'августа';
    break;
  case 8:
    Month = 'сентября';
    break;
  case 9:
    Month = 'октября';
    break;
  case 10:
    Month = 'ноября';
    break;
  case 11:
    Month = 'декабря';
    break;
}
// Вывод
document.write('Сегодня ' + Day + ' ' + Month + ' ' + Year + ' года' + " Текущее время: " + Hour + ":" + Minutes + ":" + Seconds); */
/*ДЗ3-2 const users = [
  {name: 'Вася', password: 'Vasya123', login: 'Vasya'},
  {name: 'Петя', password: 'Petya123', login: 'Petya'},
  {name: 'Дима', password: 'Dima123', login: 'Dima'}
];

let login = prompt('логин');
let pwd   = prompt('пароль');

let user = users.find(u => (u.login == login && u.password == pwd));

if(user){
  console.log('hey ' + user.name);
}
else console.log(':(') */
/* users = [
  { name: 'Ivan', login: 'ivan57', pas: 'qwe' },
  { name: 'Yana', login: 'yana57', pas: 'asd' },
];
let login = prompt('логин');
let pwd = prompt('пароль');
 */
function User(firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
  this.getDate = function () {
    return this.firstName + this.lastName + this.regDate;
  };
}
function UserList(firstName, lastName, regDate) {
  users: [];
  add = function (User) {

  };
  getAllUsers = function () {
    

  };
}
prompt('введите имя и фамилию');
