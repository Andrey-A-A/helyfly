const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const booking = document.querySelector('.booking');
const closeModal = document.querySelector('.modal__close');

booking.addEventListener('click', function() {
  // e.preventDefault();
  // modal.classList.add('show');
  // modal.style.display = "block"
  overlay.classList.add('open');
  modal.classList.add('show');
  
})

closeModal.addEventListener('click', function() {
  overlay.classList.remove('open');
  modal.classList.remove('show');
})

// window.addEventListener('click', function() {
//   modal.classList.remove('show');
// })

document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    overlay.classList.remove('open');
    modal.classList.remove('show');
  }
});

window.onclick = function (e) {
  if (e.target == modal) {
    overlay.classList.remove('open');
    modal.classList.remove('show');
  }
}
