const menu = () => {
    const menuBtn = document.querySelector('.menu__icon')
    const popupMenu = document.querySelector('.popup-menu')
    const popupDialog = document.querySelector('.popup-dialog-menu')

    console.log(menuBtn);
    console.log(popupMenu);
    console.log(popupDialog);

    menuBtn.addEventListener('click', () => {
        if (!popupMenu.style.visibility) {
            popupMenu.style.visibility = "visible"
            popupDialog.style.right = "639px"
        }

    })
    popupDialog.addEventListener('click', (e) => {
        if (!e.target.classList.contains('popup-dialog-menu')) {
            popupMenu.style.visibility = ""
            popupDialog.style.right = ""
        }
    })


}
export default menu