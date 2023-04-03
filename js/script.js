const slider = document.querySelector('.slider');

function addPreload() {  
    slider.classList.add('preload');
}

function removePreload() {
    slider.classList.remove('preload');
}

function startSlider() {
    const sliderItems = document.querySelectorAll('.slider__item');
    const sliderList = document.querySelector('.slider__list');
    const btnLeft = document.querySelector('.slider__btn-left');
    const btnRight = document.querySelector('.slider__btn-right');
    let activeSlide = 1;
    let position = 0;

    function checkSlider() {
        if ((activeSlide + 2 === sliderItems.length && document.documentElement.offsetWidth > 560) || activeSlide === sliderItems.length) {
            btnRight.style.display = 'none'; 
        } else {
            btnRight.style.display = '';
        }

        if (activeSlide === 1) {
            btnLeft.style.display = 'none'; 
        } else {
            btnLeft.style.display = '';
        }
    }

    checkSlider();

    function nextSlide() {
    sliderItems[activeSlide]?.classList.remove('slider__item_active');
    position = -sliderItems[0].clientWidth * activeSlide;
    sliderList.style.transform = `translateX(${position}px)`;
    activeSlide += 1;
    sliderItems[activeSlide]?.classList.add('slider__item_active');
    checkSlider();
    }

    function prevSlide() {
        sliderItems[activeSlide]?.classList.remove('slider__item_active');
        position = -sliderItems[0].clientWidth * (activeSlide - 2);
        sliderList.style.transform = `translateX(${position}px)`;
        activeSlide -= 1;
        sliderItems[activeSlide]?.classList.add('slider__item_active');
        checkSlider();  
    }
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        position = -sliderItems[0].clientWidth * (activeSlide - 1);
        sliderList.style.transform = `translateX(${position}px)`;
        checkSlider();
    })

}



function initSlider() {
    const sliderContainer = document.querySelector('.slider__container');
    sliderContainer.style.display = 'none';
    addPreload();
    
    window.addEventListener('load', () => {
        sliderContainer.style.display = '';
        removePreload();
        startSlider(); 
       
    })
}

window.addEventListener('DOMContentLoaded', initSlider)
