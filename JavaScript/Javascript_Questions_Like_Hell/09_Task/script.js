const spanCounter = document.querySelector('span');
const textarea = document.querySelector('textarea');

textarea.addEventListener('input',()=>{
    spanCounter.innerText = textarea.value.length;
});