function sliderBrands() {
  document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideWidth = slides[0].offsetWidth;
    let currentPosition = -slideWidth * 6; 
    sliderTrack.style.transform = `translateX(${currentPosition}px)`;

    const moveSlider = (direction) => {
        sliderTrack.style.transition = 'transform 0.3s ease';
        if (direction === 'next') {
            currentPosition -= slideWidth;
        } else if (direction === 'prev') {
            currentPosition += slideWidth;
        }
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
    };

    sliderTrack.addEventListener('transitionend', () => {
        if (currentPosition <= -slideWidth * 12) {
            sliderTrack.style.transition = 'none';
            currentPosition = -slideWidth * 6;
            sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        }
        if (currentPosition >= 0) {
            sliderTrack.style.transition = 'none';
            currentPosition = -slideWidth * 6;
            sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    nextButton.addEventListener('click', () => moveSlider('next'));
    prevButton.addEventListener('click', () => moveSlider('prev'));
});

}
export default sliderBrands;
