const tel = () => {
    const arrow = document.querySelector('.header-contacts__arrow img')
    const numBlock = document.querySelector('.header-contacts__phone-number-accord')
    const num = document.querySelector('.header-contacts__phone-number-accord a')
    arrow.addEventListener('click', () => {
        if (!num.style.opacity ) {
            arrow.style.transform = "rotate(180deg)"
            arrow.style.transition = "all 0.4s"
            numBlock.style.top = "25px"
            num.style.opacity = 1
        } else {
            arrow.style.transform = ''
            numBlock.style.top = ""
            num.style.opacity = ""
        }
    })
}
export default tel