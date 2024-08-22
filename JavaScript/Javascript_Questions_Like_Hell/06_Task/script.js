const h3 = document.querySelector('h3');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');

home.addEventListener('click',()=>{
    para1.style.display = 'block';
});

about.addEventListener('click',()=>{
    para2.style.display = 'block';
});

contact.addEventListener('click',()=>{
    para3.style.display = 'block';
});