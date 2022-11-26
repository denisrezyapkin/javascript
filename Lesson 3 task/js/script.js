// Task 1

let b1 = document.querySelector('.b-1');
let i1 = document.querySelector('.i-1');
let out_1 = document.querySelector('.out-1');

b1.onclick = function (f1) {
   let result = +i1.value == 4;
   out_1.innerHTML = result;
}

// Task 2

let b2 = document.querySelector('.b-2');
let out_2 = document.querySelector('.out-2');
let a21 = 10;
let a22 = 15;

b2.onclick = function (f2) {
   if (a21 > a22) {
      out_2.innerHTML = a21;
   } else {
      out_2.innerHTML = a22;
   }
}

// Task 3

let i31 = document.querySelector('.i-31');
let i32 = document.querySelector('.i-32');
let out_3 = document.querySelector('.out-3');
let b3 = document.querySelector('.b-3');

b3.onclick = function (f3) {
   if (+i31.value > +i32.value) {
      out_3.innerHTML = i31.value;
   } else if (i31.value < i32.value) {
      out_3.innerHTML = i32.value;
   } else {
      out_3.innerHTML = 'Переменные равны!';
   }
}

// Task 4

let i4 = document.querySelector('.i-4');
let out_4 = document.querySelector('.out-4');
let b4 = document.querySelector('.b-4');

b4.onclick = function (f4) {
   if (i4.value >= 18) {
      out_4.innerHTML = '1';
   } else {
      out_4.innerHTML = '0';
   }
}


// Task 5

let i5 = document.querySelector('.i-5');
let out_5 = document.querySelector('.out-5');
let b5 = document.querySelector('.b-5');

b5.onclick = function (f5) {
   if (i5.value < 0) {
      out_5.innerHTML = 'm';
   } else if (i5.value == 0) {
      out_5.innerHTML = '0';
   } else {
      out_5.innerHTML = '1';
   }
}

// Task 6

let i6 = document.querySelector('.i-6');
let out_6 = document.querySelector('.out-6');
let b6 = document.querySelector('.b-6');

b6.onclick = function (f6) {
   if (i6.value % 2) {
      out_6.innerHTML = 'odd';
   } else {
      out_6.innerHTML = 'even';
   }
}

// Task 7

let i71 = document.querySelector('.i-71');
let i72 = document.querySelector('.i-72');
let out_7 = document.querySelector('.out-7');
let b7 = document.querySelector('.b-7');

b7.onclick = function (f7) {
   result = i71.value ** i72.value;
   out_7.innerHTML = result;
}

// Task 8

let s8 = document.querySelector('.s-8');
let out_8 = document.querySelector('.out-8');
let b8 = document.querySelector('.b-8');

b8.onclick = function (f8) {

   switch (+s8.value) {
      case 1:
         out_8.innerHTML = 'one';
         break;

      case 2:
         out_8.innerHTML = 'two';
         break;

      case 3:
         out_8.innerHTML = 'three';
         break;
   }
}

// Task 9

let i9 = document.querySelector('.i-9');
let out_9 = document.querySelector('.out-9');
let b9 = document.querySelector('.b-9');

b9.onclick = function (f9) {
   let result = +i9.value;

   switch (true) {
      case result >= 1 && result <= 32:
         out_9.innerHTML = '1';
         break;

      case result > 32 && result <= 43:
         out_9.innerHTML = '2';
         break;

      case result > 43 && result <= 64:
         out_9.innerHTML = '3';
         break;
      default:
         out_9.innerHTML = '0';
   }
}

// Task 10

let s100 = document.querySelector('.s-100');
let out_10 = document.querySelector('.out-10');
let b10 = document.querySelector('.b-10');

b10.onclick = function () {
   out_10.innerHTML = s100.value;
}

// Task 11

let s110 = document.querySelector('.s-110');
let out_11 = document.querySelector('.out-11');

s110.onchange = function () {
   out_11.innerHTML = s110.value;
}

// Task 12

let s120 = document.querySelector('.i-120');
let out_12 = document.querySelector('.out-12');
let b12 = document.querySelector('.b-12');

b12.onclick = function () {
   let value120 = s120.value;
   out_12.innerHTML = typeof value120;
}

// Task 13

let s130 = document.querySelector('.i-130');
let out_13 = document.querySelector('.out-13');
let b13 = document.querySelector('.b-13');

b13.onclick = function () {
   let value130 = s130.value;
   out_13.innerHTML = typeof value130;
}

// Task 14

let i141 = document.querySelector('.i-141');
let i142 = document.querySelector('.i-142');
let s14 = document.querySelector('#select14');
let out_14 = document.querySelector('.out-14');
let b14 = document.querySelector('.b-14');

b14.onclick = function (f14) {

   switch (s14.value) {
      case '+':
         out_14.innerHTML = +i141.value + +i142.value;
         break;
      case '-':
         out_14.innerHTML = +i141.value - +i142.value;
         break;
      case '*':
         out_14.innerHTML = +i141.value * +i142.value;
         break;
      case '/':
         out_14.innerHTML = +i141.value / +i142.value;
         break;
   }
}

// Task 15

let s151 = document.querySelector('.s151');
let s152 = document.querySelector('.s152');
let s153 = document.querySelector('.s153');
let out_15 = document.querySelector('.out-15');
let b15 = document.querySelector('.b-15');


b15.onclick = function (f15) {

   switch (s153.value) {
      case '&&':
         out_15.innerHTML = +s151.value && +s152.value;
         break;
      case '||':
         out_15.innerHTML = +s151.value || +s152.value;
         break;
   }
}


