const body = document.body
const header = document.querySelector('.header')
const menu = document.querySelector('.header__nav')
const burgerIcon = document.querySelector('.header__burger')

    
const burgerSubscribe = () => {
burgerIcon.addEventListener('click', () => {
        header.classList.toggle('open')
        body.classList.toggle('lock')
    })

menu.addEventListener('click', e => {
        if (e.target.classList.contains('header__nav')) {
            header.classList.remove('open')
            body.classList.remove('lock')
            console.log('hi')
        }
    })
}



export default burgerSubscribe;
