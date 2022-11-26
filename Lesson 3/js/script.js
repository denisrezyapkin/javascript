// let a = 6;

// if (a > 9) {
//    // Выполнится если выражение верно
//    console.log('Yes!');
// }
// else {
//    console.log('NO!');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

// () => {} - стрелочная функция
button.onclick = () => {
   let num = +input.value;
   if (num >= 16 && num < 60) {
      console.log("Welcome!");
   }
   else if (num > 60) {
      console.log('Ты точно сюда?');
   }
   else {
      console.log("Ты не пройдешь!")
   }

   switch (num) {
      case 15:
         console.log('Ещё год потерпи!');
         break;
      case 16:
         console.log('Ура! Можно.');
         break;
      default:
         console.log('OK!');
   }

}

let b = 3;

console.log(b > 3 && b < 7);