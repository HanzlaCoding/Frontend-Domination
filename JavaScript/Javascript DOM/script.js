// DOM (Document Object Model)
var h1 = document.querySelector('h1');
var btn = document.querySelector('button');
var div = document.createElement('div');


div.textContent = 'Hello';
document.querySelector('body').append(div);
div.style.color = 'red';
div.style.fontSize = '150px';
div.style.fontFamily = 'Gilroy';