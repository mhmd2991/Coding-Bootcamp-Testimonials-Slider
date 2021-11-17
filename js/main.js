let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");
let i = 0;

display(i);

function display(i) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[i].style.display = 'flex';
}

function nextSlide() {
    i++;
    if (i > slides.length - 1) {
        i = 0;
    }
    display(i);
}

function prevSlide() {
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }
    display(i);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);