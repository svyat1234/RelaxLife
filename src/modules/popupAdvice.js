const popupAdvice = () => {
    const modal = document.querySelector('.popup-consultation')
    const btn = document.querySelector('.director-avatar .button')

    btn.addEventListener('click', () => {
        modal.style.visibility = "visible"
    })
    // feedback-wrap
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.feedback-wrap') || e.target.closest('.close')) {
            modal.style.visibility = ""
        }
    })
}

export default popupAdvice