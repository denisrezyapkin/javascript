// task 1

let a = 7;
let b = 9;

console.log(a * b);

// task 2

let c = 7;
let d = 9;

document.querySelector('.out-1').innerHTML = c / d;

// task 3

let e = 3;
let f = 5;

document.querySelector('.out-2').innerHTML = e + f;

// task 4

e1 = '3';
f1 = 5;

document.querySelector('.out-3').innerHTML = e1 + f1;

// task 5

let e2 = 3;
let f2 = 0;

document.querySelector('.out-4').innerHTML = e2 / f2;

// task 6

e3 = 3;
f3 = 'Hello';

document.querySelector('.out-5').innerHTML = e3 + f3;

// task 7

e4 = 3;
f4 = 'Hello';

document.querySelector('.out-6').innerHTML = e4 * f4;

// task 8

let input1 = document.querySelector('.input1');
let button1 = document.querySelector('.btn1');

button1.onclick = function () {
   console.log(input1.value);
};

// task 9

let input2 = document.querySelector('.input2');
let button2 = document.querySelector('.btn2');

button2.onclick = function () {
   document.querySelector('.out-7').innerHTML = input2.value;
};

// task 10

let input3 = document.querySelector('.input3');
let button3 = document.querySelector('.btn3');

button3.onclick = function () {
   document.querySelector('.out-8').innerHTML = input3.value * 10;
};

// task 11

let input4 = document.querySelector('.input4');
let button4 = document.querySelector('.btn4');

button4.onclick = function () {
   document.querySelector('.out-9').innerHTML = +input4.value + 10;
};

// task 12

let inputFirstName = document.querySelector('.firstName');
let inputLastName = document.querySelector('.lastName');
let button5 = document.querySelector('.btn5');

button5.onclick = function () {
   message = 'Hello, ' + inputFirstName.value + ' ' + inputLastName.value + '!';
   console.log(message);
};

// task 13

let inputFirstNumber = document.querySelector('.firstNumber');
let inputsecondNumber = document.querySelector('.secondNumber');
let button6 = document.querySelector('.btn6');

button6.onclick = function () {
   document.querySelector('.out-10').innerHTML = +inputFirstNumber.value + +inputsecondNumber.value;
};

// task 14

document.querySelector('.randomnumber').value = 'Hello';

// task 15

let y = document.querySelector('.task15');
y.style.border = '2px solid red';

// task 16

let inputFirstNumber2 = document.querySelector('.firstNumber2');
let inputsecondNumber2 = document.querySelector('.secondNumber2');
let button7 = document.querySelector('.btn7');

button7.onclick = function () {
   document.querySelector('.out-11').innerHTML = +inputFirstNumber2.value + +inputsecondNumber2.value;
};

// task 17

let inputTask17 = document.querySelector('.inputTask17');
let buttonTask17 = document.querySelector('.btn17');

buttonTask17.onclick = function () {
   let t = inputTask17.value;
   t = parseInt(t);
   console.log(t);
};

// task 18

let inputTask18 = document.querySelector('.inputTask18');
let buttonTask18 = document.querySelector('.btn18');

buttonTask18.onclick = function () {
   let t = inputTask18.value;
   t = parseFloat(t);
   console.log(t);
};

// task 19

let inputNumber1 = document.querySelector('.number-one');
let inputNumber2 = document.querySelector('.number-two');
let button19 = document.querySelector('.btn19');

button19.onclick = function () {
   document.querySelector('.out-19').innerHTML = parseInt(inputNumber1.value) + parseInt(inputNumber2.value);
}

// task 20
let firstName20 = document.querySelector('.firstName20');
let lastName20 = document.querySelector('.lastName20');
let age20 = document.querySelector('.age20');
let profession = document.querySelector('.profession');
let button20 = document.querySelector('.btn20');

button20.onclick = function () {
   alert('Уважаемый, ' + firstName20.value + ' ' + lastName20.value + '. Вам ' + age20.value + ' лет, по профессии Вы ' + profession.value + '. Поздравляю!');
}



