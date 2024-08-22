const progressBar = document.querySelector('.progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');

function updateProgressBar() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.style.width = progress + '%';
}

window.addEventListener('scroll', updateProgressBar);