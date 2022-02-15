const sliderPortfolio = () => {
    const slider = document.querySelector('.portfolio')
    const slides = document.querySelectorAll('.portfolio-slider__slide')
    const prev = document.querySelector('#portfolio-arrow_left')
    const next = document.querySelector('#portfolio-arrow_right')
    let correntSlide = 0

    const prevSlide = (elems, index) => {
        elems[index].style.display = "none"
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = "flex"
    }

    slider.addEventListener('click', (e) => {
        const docWidth = document.documentElement.clientWidth

        if (e.target.closest('#portfolio-arrow_right')) {
            prevSlide(slides, correntSlide)
            correntSlide++
            
        } 
        if (e.target.closest('#portfolio-arrow_left')) {
            correntSlide--
            nextSlide(slides, correntSlide)
        }
        if (docWidth > 1024) {
            if (correntSlide >= slides.length - 3) {
                next.style.display = "none"
            } else {
                next.style.display = "flex"
            }
        } else if (docWidth < 1024 && docWidth > 900) {
            if (correntSlide >= slides.length - 2) {
                next.style.display = "none"
            } else {
                next.style.display = "flex"
            }
        } else if (docWidth < 900) {
            if (correntSlide >= slides.length -1) {
                next.style.display = "none"
            } else {
                next.style.display = "flex"
            }
        }
       
        if (correntSlide > 0) {
            prev.style.display = "flex"

        } else {
            prev.style.display = "none"
        }
        
    })

    
}

export default sliderPortfolio