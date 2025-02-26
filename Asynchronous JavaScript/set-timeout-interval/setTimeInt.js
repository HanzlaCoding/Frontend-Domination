// setTimeOut
console.log('hello 1');
console.log('hello 2');
setTimeout(()=>{
    console.log('hello 3');
}, 10000);
console.log('hello 4');

// setInterval
var count = 0;
const int = setInterval(() => {
    count++;
    console.log(count);
    if(count>=60) clearInterval(int)
    }, 1000);

// document.querySelector('h1').innerText += int