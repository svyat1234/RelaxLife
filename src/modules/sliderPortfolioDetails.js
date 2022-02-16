const sliderPortfolioDetails = () => {
    const modal = document.querySelector('.popup-portfolio')
    const images = document.querySelectorAll('.portfolio-slider__slide-frame')
    const slider = document.querySelector('.popup-portfolio-slider-wrap')
    const slides = document.querySelectorAll('.popup-portfolio-slider__slide')
    const text = document.querySelectorAll('.popup-portfolio-text')
    const current = document.querySelector('.popup-portfolio .slider-counter-content__current')
    const total = document.querySelector('.popup-portfolio .slider-counter-content__total')

    let correntSlide = 0
    current.textContent = correntSlide + 1

        
    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.visibility = "visible"
        })
    })

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup') || e.target.closest('.close')) {
            modal.style.visibility = ""
        }
    })
    
    
    slides.forEach(slide => {
            slide.style.display = "none"
        })

    slides[correntSlide].style.display = "flex"
    
    text.forEach(text => {
        text.style.display = "none"
    })

    text[correntSlide].style.display = "flex"

    const prevSlide = (elems, index) => {
        elems[index].style.display = "none"
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = "flex"
    }

    slider.addEventListener('click', (e) => {
        
        if (e.target.closest('#popup_portfolio_right')) {
            prevSlide(slides, correntSlide)
            prevSlide(text, correntSlide)
            correntSlide++
        } 
        if (e.target.closest('#popup_portfolio_left')) {
            correntSlide--
            slides.forEach(slide => {
                slide.style.display = "none"
            })
            text.forEach(text => {
                text.style.display = "none"
            })
        }
        if (correntSlide >= slides.length) {
            correntSlide = 0
        } 
        if (correntSlide < 0) {
            correntSlide = slides.length - 1
        } 
        
        nextSlide(slides, correntSlide)
        nextSlide(text, correntSlide)

        current.textContent = correntSlide + 1
    })

    total.textContent = slides.length

}

export default sliderPortfolioDetails