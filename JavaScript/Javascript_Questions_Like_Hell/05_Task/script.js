const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const h1 = document.querySelector('h1');


var int;

start.addEventListener('click', () => {
    var count = 0;
    int = setInterval(() => {
        count++
        h1.innerText = count;
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(int);
});