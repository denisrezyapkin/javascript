let out_task_1 = document.querySelector('.out_task_1')
let out_task_2 = document.querySelector('.out_task_2')
let out_task_3 = document.querySelector('.out_task_3')
let out_task_4 = document.querySelector('.out_task_4')
let out_task_5 = document.querySelector('.out_task_5')
let out_task_6 = document.querySelector('.out_task_6')
let out_task_7 = document.querySelector('.out_task_7')
let out_task_8 = document.querySelector('.out_task_8')
let out_task_9 = document.querySelector('.out_task_9')
let out_task_10 = document.querySelector('.out_task_10')

for (i = 1; i < 4; i++) {
   for (k = 1; k < 4; k++) {
      out_task_1.innerHTML += '*'
   }
   out_task_1.innerHTML += '_'
}

for (i = 1; i < 4; i++) {
   out_task_2.innerHTML += `<br>${i}<br>`
   for (k = 1; k < 4; k++) {
      out_task_2.innerHTML += `*_`
   }
}

for (i = 1; i < 5; i++) {
   out_task_3.innerHTML += `<br>`
   for (k = 1; k < 4; k++) {
      out_task_3.innerHTML += `*_`
   }
}

for (i = 1; i <= 3; i++) {
   out_task_4.innerHTML += `${i}_ `
   for (k = 1; k <= 5; k++) {
      out_task_4.innerHTML += ` ${k} `
   }
}

for (i = 1; i <= 3; i++) {
   for (k = 0; k < 6; k++) {
      if (k % 2 == 0) {
         out_task_5.innerHTML += '1'
      } else {
         out_task_5.innerHTML += '0'
      }
   }
   out_task_5.innerHTML += `<br>`
}

for (i = 1; i <= 3; i++) {
   for (k = 1; k < 7; k++) {
      if (k == 3 || k == 6) {
         out_task_6.innerHTML += `x`
      } else if (k % 2 == 0) {
         out_task_6.innerHTML += '0'
      } else {
         out_task_6.innerHTML += '1'
      }
   }
   out_task_6.innerHTML += `<br>`
}

for (i = 4; i > 0; i--) {
   for (k = i; k <= 4; k++) {
      out_task_7.innerHTML += "*"
   }
   out_task_7.innerHTML += '<br>'
}


for (i = 0; i < 5; i++) {
   for (k = 4 - i; k > 0; k--) {
      out_task_8.innerHTML += "*"
   }
   out_task_8.innerHTML += `<br>`
}

for (i = 5; i > 0; i--) {
   for (k = 1 + i; k <= 6; k++) {
      out_task_9.innerHTML += ` ${k - i} `
   }
   out_task_9.innerHTML += '<br>'
}

for (i = 0; i < 5; i++) {
   for (k = 1; k <= 10; k++) {
      if (k < 10) {
         out_task_10.innerHTML += `${i}${k} `;
      }
      else {
         out_task_10.innerHTML += `${k * (i + 1)} <br>`;
      }
   }
}








