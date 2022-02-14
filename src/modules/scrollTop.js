import { animate } from './helpers'
const scrollTop = () => {
    const btn = document.querySelector('.button-footer')
    // const btnLink = document.querySelector('.button-footer a')

    const scrollTopFunc = () => {
        let scrolled = window.pageYOffset

        animate({
          duration: 2000,
          timing(timeFraction) {
              return  Math.pow(1 - timeFraction, 2)
          },
          draw(progress) {
              window.scrollTo(0, scrolled * progress)
          }
        });

    }

btn.addEventListener('click', scrollTopFunc)
}

export default scrollTop