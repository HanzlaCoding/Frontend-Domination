// var ul = document.querySelector('ul');
// var inp = document.querySelector('input');
// var add = document.querySelector('#add');
// var remove= document.querySelector('#remove');
// var li = document.createElement('li');

// add.addEventListener('click',()=>{
//     if(inp.value === ''){}
//     else{
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         inp.value = '';
//     }
// });

// remove.addEventListener('click',()=>{
//         ul.removeChild(li);
// });

var ul = document.querySelector('ul');
var inp = document.querySelector('input');
var add = document.querySelector('#add');
var remove = document.querySelector('#remove');


var li;
add.addEventListener('click', () => {
    li = document.createElement('li');
    if (inp.value === '') {}
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = '';
});

remove.addEventListener('click', () => {
    ul.removeChild(li);
});