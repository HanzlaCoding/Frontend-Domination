const progBar = document.querySelector('#progBar');
const bar = document.querySelector('#bar');

let width = 0;
const int = setInterval(() => {
    if (width >= 100) {
        clearInterval(int);
    } else {
        width++;
        bar.style.width = `${width}%`;
    }
}, 200);