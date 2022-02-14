const accordion = () => {
    const btns = document.querySelectorAll('.accordion .title_block')
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('msg-active')) {
                btn.classList.remove('msg-active')
            } else {
                btns.forEach(btn => {
                    btn.classList.remove('msg-active')
                })
                btn.classList.add('msg-active')
            }
        })
    })
}

export default accordion