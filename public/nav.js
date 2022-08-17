// Responsive design for menu
const mobileBtn = document.getElementById('mobile-cta');
let nav = document.querySelector('nav');
let mobileBtnExit = document.getElementById('mobile-exit');

console.log("hi");

mobileBtn.addEventListener('click', () => {
  nav.classList.toggle('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
  nav.classList.toggle('menu-btn');
})

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});