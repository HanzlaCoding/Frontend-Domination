// js bhi forms use krte hein to jb submit krte ha to page reload ho jata ha to ise rokna parega.
// iske liye use karega preventDefault() method.

// nodeList ik array jesa structure hai jisme html elements hon ge
var form = document.querySelector('form');
var inp1 = document.querySelector('#input1');
var inp2 = document.querySelector('#input2');
var body = document.querySelector('body');
var span = document.querySelector('span');
// Logic 1
// form.addEventListener('submit',(event)=>{
//     event.preventDefault();

//     if(inp1.value === '' || inp2.value === ''){
//         span.textContent = 'Please fill all fields';
//         span.style.color = 'red';
//         span.style.fontFamily = 'Gilroy';
//         body.appendChild(span);
//     }
//     else{
//         inp1.value = ''
//         inp2.value = ''
//         span.textContent = 'Form submitted successfully';
//         span.style.color = 'green';
//     }
// })

// Logic 2

const inps = document.querySelectorAll('input[type="text"]');
var span = document.querySelector('span');
console.log(inps);

form.addEventListener('submit',function(event){
    event.preventDefault();
    for(let i = 0; i < inps.length; i++){
        if(inps[i].value.trim() === ''){
            span.innerText = 'Error some fields are blank';
            span.style.color = 'red';
            span.style.fontFamily = 'Gilroy';
            // break;
        }
        else{
            span.innerText = 'Form submitted successfully';
            span.style.color = 'green';
            span.style.fontFamily = 'Gilroy';

        }
    }
});