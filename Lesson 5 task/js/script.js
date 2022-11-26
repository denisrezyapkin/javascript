// Task 1

let out1 = ' ';

document.querySelector('.b-1').onclick = function t1() {
   for (i = 0; i <= 50; i++) {
      out1 += i + ' ';
   }
   document.querySelector('.out-1').innerHTML = out1;
}

// Task 2 

let out2 = ' ';

document.querySelector('.b-2').onclick = function t2() {
   for (i = 2; i <= 122; i = i + 2) {
      out2 += i + ' ';
   }
   document.querySelector('.out-2').innerHTML = out2;
}

// Task 3

let out3 = ' ';

document.querySelector('.b-3').onclick = function t3() {
   for (i = 25; i >= 7; i--) {
      out3 += i + ' ';
   }
   document.querySelector('.out-3').innerHTML = out3;
}

// Task 4

let out4 = ' ';

document.querySelector('.b-4').onclick = function t4() {
   for (i = 77; i >= 35; i = i - 3) {
      out4 += i + '_';
   }
   document.querySelector('.out-4').innerHTML = out4;
}

// Task 5

let out5 = ' ';

document.querySelector('.b-5').onclick = function t5() {
   for (i = 1; i <= 17; i++) {
      if (i % 2 == 0) {
         num5 = '_*'
      } else {
         num5 = '_**'
      }
      out5 += i + num5;
   }
   document.querySelector('.out-5').innerHTML = out5;
}


// Task 6

let input6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');

document.querySelector('.b-6').onclick = function t6() {
   for (i = 0; i < input.value; i++) {
      out6.innerHTML += '******' + '<br>';
   }
}

// Task 7

let input7 = document.querySelector('.i-7');
let out7 = document.querySelector('.out-7');

document.querySelector('.b-7').onclick = function t7() {
   for (i = input7.value; i >= 0; i--) {
      out7.innerHTML += i + ' ';
   }
}

// Task 8

let input81 = document.querySelector('.i-81');
let input82 = document.querySelector('.i-82');
let out8 = document.querySelector('.out-8');

document.querySelector('.b-8').onclick = function t8() {
   for (i = input81.value; i <= input82.value; i++) {
      out8.innerHTML += i + ' ';
   }
}

// Task 9



// Task 10



// Task 11



// Task 12



// Task 13



// Task 14



// Task 15

