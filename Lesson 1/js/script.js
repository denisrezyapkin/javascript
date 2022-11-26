console.log('Hello!'); // строки берем в кавычки
console.log("world!");
console.log('333');
console.log(333);
console.log('Hello' + 'world'); // конкатенация
console.log('Hello' + ' world'); // конкатенация
console.log('Hello ' + 'world'); // конкатенация
console.log('Hello' + ' ' + ' world'); // конкатенация
console.info('Hello');
// alert('Hello');
// alert('Hello'); Ctrl + /
// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = '2019';
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('h2.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 777; // есть #
document.getElementById('one').innerHTML = 888; // нет #

let b; // var a - устарело
let a = document.querySelector('#one'); // внутрь переменной А получили параграф
let c; // объявлии переменную
c = document.querySelector('.header'); // присвоили значение

a.innerHTML = 9999; // new! - ошибка 
c.innerHTML = 6666;
