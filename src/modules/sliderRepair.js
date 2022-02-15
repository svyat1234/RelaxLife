const sliderRepair = () => {
 

//     const sliderContent = document.querySelector('.repair-types-slider-wrap')
//     const sliders = document.querySelectorAll('.types-repair1')
//     const slides = document.querySelectorAll('.repair-types-slider__slide')
//     let correntSlide = 0

//     const prevSlide = (elems, index) => {
//         elems[index].style.display = "none"
//     }

//     const nextSlide = (elems, index) => {
//         elems[index].style.display = "flex"
//     }

//     sliders.forEach(slider => {
//         slider.addEventListener('click', (e) => {
//             console.log("dsa");

//             prevSlide(slides, correntSlide)
//             if (e.target.closest('#repair-types-arrow_right')) {
//                 correntSlide++
//             } 
//             if (e.target.closest('#repair-types-arrow_left')) {
//                 correntSlide--
//             }
//             if (correntSlide >= slides.length) {
//                 correntSlide = 0
//             } 
//             if (correntSlide < 0) {
//                 correntSlide = slides.length - 1
//                 slides.forEach(slide => {
//                     slide.style.display = "none"
//                 })
//             } 
//             nextSlide(slides, correntSlide)
    
//         })
//     })
}

export default sliderRepair