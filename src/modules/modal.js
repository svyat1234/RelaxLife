const modal = () => {
    const arrow = document.querySelector('.header-contacts__arrow')
    const numBlock = document.querySelector('.header-contacts__phone-number-accord')
    const num = document.querySelector('.header-contacts__phone-number-accord a')
    arrow.addEventListener('click', () => {
        if (!num.style.opacity ) {
            arrow.style.transform = "rotate(180deg)"
            numBlock.style.top = "25px"
            num.style.opacity = 1
        } else {
            arrow.style.transform = ''
            numBlock.style.top = ""
            num.style.opacity = ""
        }
    })
}
export default modal