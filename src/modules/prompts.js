import { animate } from './helpers'
const prompts = () => {
    const prompts = document.querySelectorAll('.formula-item-popup')
    const items = document.querySelectorAll('.formula-item__icon-inner-text')
    const color = document.querySelectorAll('.formula-item__icon-inner')

    items.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            prompts[i].style.visibility = "visible"
            color[i].classList.add('active-item')
            animate({
                duration: 200,
                timing(timeFraction) {
                    return Math.pow(timeFraction, 2)
                },
                draw(progress) {
                    prompts[i].style.opacity = progress
                }
              });
        })
        item.addEventListener('mouseleave', () => {
            color[i].classList.remove('active-item')
            animate({
                duration: 200,
                timing(timeFraction) {
                    return Math.pow(1 - timeFraction, 2)
                },
                draw(progress) {
                    prompts[i].style.opacity = progress
                    if (progress == 0) {
                        prompts[i].style.visibility = ""
                    }
                }
              });
        })
    })
    // active-item

}

export default prompts