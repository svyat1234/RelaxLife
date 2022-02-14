const tabs = () => {
    const tabPanel  = document.querySelector('.nav-wrap-repair')
    const tabs = document.querySelectorAll('.repair-types-nav__item')
    const tabContent = document.querySelectorAll('.repair-types-slider__slide')

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
            })
        } 
        
    })
}

export default tabs