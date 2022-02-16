const sliderTranspAdapt = () => {
    const slider = document.querySelector('#transparency')
    const slides = document.querySelectorAll('.transparency-item')


    let correntSlide = 0

    if (document.documentElement.clientWidth < 1091) {
        
        slides.forEach(slide => {
            slide.style.display = "none"
        })

        slides[correntSlide].style.display = "flex"
    }


    const prevSlide = (elems, index) => {
        elems[index].style.display = "none"
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = "flex"
    }

    slider.addEventListener('click', (e) => {
        prevSlide(slides, correntSlide)
        if (e.target.closest('#transparency-arrow_right')) {
            correntSlide++
        } 
        if (e.target.closest('#transparency-arrow_left')) {
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

export default sliderTranspAdapt