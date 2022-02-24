const tabsSliders = () => {
    const tabPanel  = document.querySelector('.nav-wrap-repair')
    const tabs = document.querySelectorAll('.repair-types-nav__item')
    const tabContent = document.querySelectorAll('.types-repair')
    const slider = document.querySelector('.repair-types-slider-wrap')
    const total = slider.querySelector('.slider-counter-content__total')
    let current = slider.querySelector('.slider-counter-content__current')
    let slides
    let correntSlide = 0

    const slidesContent = (i) => {
        slides = tabContent[i].querySelectorAll('.repair-types-slider__slide')
        total.textContent = slides.length
    }

    tabs.forEach((tab, i) => {
        if(tab.classList.contains('active')) {
            slidesContent(i)
        }
    })
    // Табы со скрытием ненужных слайдов
    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.repair-types-nav__item')) {
            const tabBtn = e.target.closest('.repair-types-nav__item')
            tabs.forEach((tab, i) => {
                if(tab === tabBtn) {
                    tab.classList.add('active')
                    tabContent[i].style.display = "block"
                } else {
                    tab.classList.remove('active')
                    tabContent[i].style.display = "none"
                }
                if(tab.classList.contains('active')) {
                    slidesContent(i)
                }
            })
        } 
        // Скрыть все слайды   
        slides.forEach(slide => {
            slide.style.display = "none" 
        })
        // Показать первый слайд
        correntSlide = 0
        slides[correntSlide].style.display = "flex"
        current.textContent = correntSlide + 1
    })

   

    const prevSlide = (elems, index) => {
        elems[index].style.display = "none"
    }

    const nextSlide = (elems, index) => {
        elems[index].style.display = "flex"
    }

    // Слайдер

    slider.addEventListener('click', (e) => {
        tabs.forEach((slide, i) => {
            if(slide.classList.contains('active')) {
                slides = tabContent[i].querySelectorAll('.repair-types-slider__slide')
            }
        })
        
        if (e.target.closest('#repair-types-arrow_right')) {
            prevSlide(slides, correntSlide)
            correntSlide++
            
        } 
        if (e.target.closest('#repair-types-arrow_left')) {
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
    })
}

export default tabsSliders