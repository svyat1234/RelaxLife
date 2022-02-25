const sliderTabsAdapt = () => {
    const slider = document.querySelector('.nav-wrap-repair')
    const sliderLine = slider.querySelector('.nav-list-repair')
    const slides = slider.querySelectorAll('.button_o')
    const next = slider.querySelector('#nav-arrow-repair-right_base')
    const prev = slider.querySelector('#nav-arrow-repair-left_base')
    let correntSlide = 0

    let offset = 0
    if (offset <= 0) {
        prev.style.display = "none"
    }
    slider.addEventListener('click', (e) => {
        if (e.target.closest('#nav-arrow-repair-right_base')) {
            offset = offset + slides[correntSlide].clientWidth + 13
            correntSlide++
            if (offset >= 704) {
                next.style.display = "none"
            } else {
                prev.style.display = "block"
            }
            sliderLine.style.marginLeft = -offset + 'px'
        } 
        if (e.target.closest('#nav-arrow-repair-left_base')) {
            correntSlide--
            offset = offset - slides[correntSlide].clientWidth - 13
            if (offset <= 0) {
                prev.style.display = "none"
                correntSlide = 0
            } else {
                next.style.display = "block"
            }
            sliderLine.style.marginLeft = -offset + 'px'
        }
    })
}
export default sliderTabsAdapt