const popupRepair = () => {
    const modal = document.querySelector('.popup-repair-types')
    const firstBtn = document.querySelector('.no-overflow')
    const secondBtn = document.querySelector('.tablet-hide a')

    const modalVisible = (e) => {
        e.preventDefault()
        modal.style.visibility = "visible"
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-repair-types') || e.target.closest('.mobile-hide')) {
            modal.style.visibility = ""
        }
    })

    firstBtn.addEventListener('click', modalVisible)
    secondBtn.addEventListener('click', modalVisible)
}

export default popupRepair