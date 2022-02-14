const sliderReviews = () => {
    const slider = document.querySelector('.reviews')
    const slides = document.querySelectorAll('.reviews-slider__slide')

    let correntSlide = 0

    const prevSlide = (elems, index) => {
        elems[index].style.display = "none"
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = "flex"
    }

    slider.addEventListener('click', (e) => {
        prevSlide(slides, correntSlide)
        if (e.target.closest('#reviews-arrow_right')) {
            correntSlide++
            
        } 
        if (e.target.closest('#reviews-arrow_left')) {
            correntSlide--
        }
        if (correntSlide >= slides.length) {
            correntSlide = 0
        } 
        if (correntSlide < 0) {
            correntSlide = slides.length - 1
            slides.forEach(slide => {
                slide.style.display = "none"
            })
        } 
        nextSlide(slides, correntSlide)
    })
}

export default sliderReviews