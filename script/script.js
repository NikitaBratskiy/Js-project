const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.slider-link');
const sliderContent = document.querySelector('.slider-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;

// Переключение на слайд
function goToSlide(slideIndex) {
    currentSlide = (slideIndex + slides.length) % slides.length;
    sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateActive();
}

// Обновление активных точек и ссылок
function updateActive() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    links.forEach((link, index) => {
        link.style.color = index === currentSlide ? '#E3B873' : '#FFFFFF4D';
    });
    links.forEach((link, index) => {
        link.classList.toggle('active', index === currentSlide); // Добавляем класс active
    });
}

// Обработчики событий
prevButton.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.dataset.slide, 10);
        goToSlide(slideIndex);
    });
});

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const slideIndex = parseInt(e.target.dataset.slide, 10);
        goToSlide(slideIndex);
    });
});

// Инициализация
goToSlide(0);