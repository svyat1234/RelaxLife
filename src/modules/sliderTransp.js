// "popup-transparency-slider"

const sliderTransp = () => {
    const images = document.querySelectorAll('.transparency-item__img')
    const slider = document.querySelector('.popup-transparency')
    const slides = document.querySelectorAll('.popup-transparency-slider__slide')
    const current = document.querySelector('#transparency-popup-counter .slider-counter-content__current')
    const total = document.querySelector('#transparency-popup-counter .slider-counter-content__total')

    let correntSlide = 0

    

    const prevSlide = (elems, index) => {
        elems[index].style.display = "none"
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = "flex"
    }


    images.forEach((img, i)  => {
        img.addEventListener('click', () => {
            console.log(i);
            slides.forEach(slide => {
                slide.style.display = "none"
            })
            slider.style.visibility = "visible"
            correntSlide = i
            current.textContent = correntSlide + 1
            nextSlide(slides, correntSlide)
        })

    })

    

    slider.addEventListener('click', (e) => {
        prevSlide(slides, correntSlide)
        if (e.target.closest('#transparency_right')) {
            correntSlide++
            
        } 
        if (e.target.closest('#transparency_left')) {
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
        current.textContent = correntSlide + 1

        if (e.target.closest('.popup-transparency .close')) {
            slider.style.visibility = ""

        }
    })
    
    total.textContent = slides.length

}

export default sliderTransp