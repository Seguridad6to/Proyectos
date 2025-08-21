document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById("ima");
    let contador = 0;
    let archivo;

    const showSlide = index => {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Inicializa el slider
    showSlide(currentIndex);
});
