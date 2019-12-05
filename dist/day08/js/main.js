let wahooBtn = document.querySelector('.button-theme');
let marioWrapper = document.querySelector('.mario-wrapper');

wahooBtn.addEventListener('click', () => {
  marioWrapper.classList.add('wahoo-animation');
  setTimeout(() => {
    marioWrapper.classList.remove('wahoo-animation');
  }, 1000);
});
