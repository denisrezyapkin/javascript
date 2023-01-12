let a1 = 8;
function t1() {
   document.querySelector('.out-1').innerHTML = a1;
}
document.querySelector('.b-1').onclick = t1;

let a2 = 8;
function t2() {
   return a2;
}
document.querySelector('.b-2').onclick = function () {
   document.querySelector('.out-2').textContent = t2();
}

function t3(a, b) {
   return a * b;
}
document.querySelector('.b-3_1').onclick = function () {
   document.querySelector('.out-3_1').textContent = t3(3, 4);
}
document.querySelector('.b-3_2').onclick = function () {
   document.querySelector('.out-3_2').textContent = t3(5, 6);
}

let currentYear = new Date().getFullYear();

function t4(a) {
   return currentYear - a;
}
document.querySelector('.b-4').onclick = function () {
   document.querySelector('.out-4').textContent = t4(document.getElementById('input-4').value);
}

function t5(name) {
   return 'Hello ' + name + '!';
}
document.querySelector('#input-5').onchange = function () {
   document.querySelector('.out-5').textContent = t5(document.getElementById('input-5').value);
}

function t6(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector('.b-6').onclick = function () {
   let input_6_1 = document.getElementById('input_6_1').value;
   let input_6_2 = document.getElementById('input_6_2').value;
   document.querySelector('.out-6').textContent = t6(input_6_1, input_6_2);
}

function t7(min, max, count) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.b-7').onclick = function () {
   a = t7(0, 250);
   b = t7(0, 250);
   c = t7(0, 250);
   rgbColor = "rgb(" + a + "," + b + ',' + c + ')';
   document.querySelector('.out-7_1').textContent = rgbColor;
   document.querySelector('.out-7').style.background = rgbColor;
}

function t8(sometext) {
   return sometext.trim();
}

document.querySelector('.b-8').onclick = function () {
   input_8 = document.getElementById('input-8').value;
   document.getElementById('input-8_1').value = t8(input_8);
}

function t9(number) {
   return number % 2 === 0;
}

document.querySelector('.b-9').onclick = function () {
   input_9 = document.getElementById('input-9').value;
   document.querySelector('.out-9').textContent = t9(input_9);
}

function t10(a, b) {
   return Math.max(a, b);
}

document.querySelector('.b-10').onclick = function () {
   input_10_1 = document.getElementById('input-10_1').value;
   input_10_2 = document.getElementById('input-10_2').value;
   document.querySelector('.out-10').textContent = t10(input_10_1, input_10_2);
}










