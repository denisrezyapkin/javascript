// Task 1

document.querySelector('.b-1').onclick = () => {
   alert('TASK 1 - COMPLETE');
}

// Task 2

document.querySelector('.b-2').onclick = () => {
   alert('TASK 2 - COMPLETE');
}

// Task 3

document.querySelector('.p-3').onclick = () => {
   alert('TASK 3 - COMPLETE');
}

// Task 4


let out4 = document.querySelector('.out-4');

document.querySelector('.b-4').onclick = () => {
   out4.innerHTML = document.querySelector('.i-4').checked;
}

// Task 5

let out5 = document.querySelector('.out-5');

document.querySelector('.b-5').onclick = () => {
   let myCheckBox = document.querySelector('.i-5');
   if (myCheckBox.checked) {
      out5.innerHTML = myCheckBox.value;
   } else {
      out5.innerHTML = myCheckBox.checked;
   }
}

// Task 6

let out6 = document.querySelector('.out-6');

document.querySelector('.b-6').onclick = () => {
   out6.innerHTML = document.querySelector('.i-6').value;
}

// Task 7

let out71 = document.querySelector('.out-71');
let out72 = document.querySelector('.out-72');

document.querySelector('.b-7').onclick = () => {
   let i7 = document.querySelector('.i-7');
   out71.innerHTML = i7.value;
   if (i7.value.length >= 6) {
      out72.innerHTML = 1;
   } else {
      out72.innerHTML = 0;
   }
}

// Task 8

let out8 = document.querySelector('.out-8');
let out81 = document.querySelector('.out-81');

document.querySelector('.b-8').onclick = () => {

   out8.innerHTML = ('<input type="text" class="i-81"><button class="b-81">BUTTON #8-1</button>');
   let i81 = document.querySelector('.i-81');
   document.querySelector('.b-81').onclick = function (f81) {
      out81.innerHTML = i81.value;
   }

}

// Task 9

let out9 = document.querySelector('.out-9');
let i9 = document.querySelector('.r-9');
document.querySelector('.b-9').onclick = () => {
   if (i9.checked) {
      console.log(i9.value);
   } else {
      console.log(0);
   }
}
// Task 10

let out10 = document.querySelector('.out-10');
let i10 = document.querySelector('.i-10');

document.querySelector('.b-10').onclick = () => {
   out10.style.background = i10.value;
}

// Task 11

let i111 = document.querySelector('.i-111');
let i112 = document.querySelector('.i-112');

document.querySelector('.b-11').onclick = () => {
   i112.value = i111.value;
}

// Task 12

let i12 = document.querySelector('.i-12');
let out12 = document.querySelector('.out-12');

document.querySelector('.b-12').onclick = () => {
   out12.innerHTML = i12.value;
}

// Task 13

let i13 = document.querySelector('.i-13');
let out13 = document.querySelector('.out-13');

document.querySelector('.i-13').oninput = () => {
   out13.innerHTML = i13.value;
}

// Task 14

let t14 = document.querySelector('.t-14');
let out14 = document.querySelector('.out-14');

document.querySelector('.b-14').onclick = () => {
   out14.innerHTML = t14.value;
}

// Task 15

let t15 = document.querySelector('.t-15');
let i15 = document.querySelector('.i-15');
let out15 = document.querySelector('.out-15');

document.querySelector('.b-15').onclick = () => {
   t15.value = i15.value;
   out15.innerHTML = i15.value;
}

// Task 16

let s16 = document.querySelector('.s-16');
let out16 = document.querySelector('.out-16');

document.querySelector('.b-16').onclick = function (f16) {
   out16.innerHTML = s16.value;
}

// Task 17

let s17 = document.querySelector('.s-17');
let out17 = document.querySelector('.out-17');

document.querySelector('.s-17').onchange = function (f17) {
   out17.innerHTML = s17.value;
}

// Task 18

let i18 = document.querySelector('.i-18');
let s18 = document.querySelector('.s-18');

document.querySelector('.s-18').onchange = function (f18) {
   i18.value = s18.value;
}

// Task 19

let i191 = document.querySelector('.i-191');
let i192 = document.querySelector('.i-192');
let out19 = document.querySelector('.out-19');

document.querySelector('.b-19').onclick = function (f19) {
   out19.innerHTML = i191.value + ' ' + i192.value;
}

// Task 20

let form = document.querySelector('.f-20');
let out20 = document.querySelector('.out-20');

document.querySelector('.b-20').onclick = (event) => {
   event.preventDefault();
   out20.innerHTML = form.elements.text.value + ' ' + form.elements.pwd.value;
}