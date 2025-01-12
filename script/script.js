const slidesData = [
    { imgSrc: "./img/1.png", alt: "Slide 1", title: "ROSTOV-ON-DON, ADMIRAL" },
    { imgSrc: "./img/2.png", alt: "Slide 2", title: "SOCHI THIEVES" },
    { imgSrc: "./img/3.png", alt: "Slide 3", title: "ROSTOV-ON-DON PATRIOTIC" }
];

const sliderContent = document.querySelector('.slider-content');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.slider-link');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;

// Генерация слайдов на основе данных
function generateSlides() {
    slidesData.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        
        const img = document.createElement('img');
        img.src = slide.imgSrc;
        img.alt = slide.alt;
        
        slideElement.appendChild(img);
        sliderContent.appendChild(slideElement);

        // Добавление точек
        const dot = document.querySelector(`.dot[data-slide="${index}"]`);
        dot.addEventListener('click', () => goToSlide(index));
        
        // Обновление ссылок
        const link = document.querySelector(`.slider-link[data-slide="${index}"]`);
        link.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
        });
    });
}

// Переключение на слайд
function goToSlide(slideIndex) {
    currentSlide = (slideIndex + slidesData.length) % slidesData.length;
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
        link.classList.toggle('active', index === currentSlide);
    });
}

// Обработчики событий
if (prevButton) {
    prevButton.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
}

if (nextButton) {
    nextButton.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
}

// Инициализация
generateSlides();
goToSlide(0);
