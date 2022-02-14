import { animate } from './helpers'
const prompts = () => {
    const prompts = document.querySelectorAll('.formula-item-popup')
    const items = document.querySelectorAll('.formula-item__icon-inner-text')

    items.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            prompts[i].style.visibility = "visible"
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
}

export default prompts