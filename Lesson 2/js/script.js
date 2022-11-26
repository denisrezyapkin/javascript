let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {
   // Выполнится когда кнопка будет нажата
   // console.log('Работает!');
   // console.log(inputIn.value); // value - то что введено в input
   let b = inputIn.value;
   console.log(b);
   div.innerHTML = b;
   inputIn.value = '';
}
