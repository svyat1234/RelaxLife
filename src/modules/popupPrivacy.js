const popupPrivacy = () => {
    const btns = document.querySelectorAll('.link-privacy')
    const modal = document.querySelector('.popup-privacy')
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.visibility = "visible"
        })
    
    })
 
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-dialog-privacy')) {
            modal.style.visibility = ""
        }
    })
}

export default popupPrivacy