const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const navs = document.querySelectorAll('.navs');


navs.forEach((navBtn) => {
    navBtn.addEventListener('click', function(e) {
        
        slides[slideIndex].classList.toggle('show');
        slideIndex = e.target.getAttribute('data');
        slides[slideIndex].classList.toggle('show');
    })
})


setInterval(function() {
    slides[slideIndex].classList.toggle('show');
    slideIndex = (slideIndex+1)%3;
    slides[slideIndex].classList.toggle('show');
}, 5000);

var slideIndex = 0;

slides[0].classList.toggle('show');

prevBtn.addEventListener('click', function(e) {
    slides[slideIndex].classList.toggle('show');
    slideIndex = (slideIndex == 0) ? 3 : slideIndex-1;
    slides[slideIndex].classList.toggle('show');
})

nextBtn.addEventListener('click', function(e) {
    slides[slideIndex].classList.toggle('show');
    slideIndex = (slideIndex+1)%3;
    slides[slideIndex].classList.toggle('show');
})