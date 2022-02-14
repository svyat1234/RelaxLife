const menu = () => {
    const menuBtn = document.querySelector('.menu__icon')
    const popupMenu = document.querySelector('.popup-menu')
    const popupDialog = document.querySelector('.popup-dialog-menu')
    menuBtn.addEventListener('click', () => {
        const docWidth = document.documentElement.clientWidth
        if (!popupMenu.style.visibility) {
            popupMenu.style.visibility = "visible"
            if (docWidth > 576) {
                popupDialog.style.right = popupDialog.clientWidth + "px"
            } else {
                popupDialog.style.top = popupDialog.offsetHeight + "px"
            }
            
        }

    })

    popupMenu.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-dialog-menu') || e.target.tagName === 'A' || e.target.classList.contains('close-menu')) {
            popupMenu.style.visibility = ""
            popupDialog.style.right = ""
            popupDialog.style.top = ""
        }
    })
}
export default menu