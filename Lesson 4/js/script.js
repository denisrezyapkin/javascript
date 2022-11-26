document.querySelector('#btn-2').onclick = (event) => {
   event.preventDefault();
   let text = document.querySelector('#two');
   console.log(text.value);
}