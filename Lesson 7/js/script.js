let f1 = document.querySelector('.f-1');

function one() {
   console.log('work')
}

one()

// f1.onclick = one; // функция объявляется без круглых скобок

f1.onclick = () => {
   console.log('Hello');
}

console.log(1 + one());
console.log(one());

function two() {
   console.log('work 22222');
   return 54;
}

two();

console.log(1 + two());

let a = 8;
let b = 9;

function multiply() {
   return a * b;
}

let c1 = multiply();
let c2 = 10 * multiply();
console.log(c1, c2);

function multi2(x = 9, y = 8) {
   return x * y;
   // все что написано дальше будет проигнорировано
}

console.log(multi2(4, 5));

document.querySelector('.f-2').onclick = () => {
   console.log('arrow');
}

function (a, b) {

}