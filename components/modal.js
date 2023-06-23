const openModal = document.querySelector('.banner__button')
const openModalAdaptive = document.querySelector('.banner__button-adaptive')
const modal = document.querySelector('.banner__modal')
const modalClose = document.querySelector('.banner__form-close')
const body = document.body

const modalSubscribe = () => {
    openModal.addEventListener('click', () => {
        modal.classList.add('open')
        body.classList.add('lock')
    })

    openModalAdaptive.addEventListener('click', () => {
        modal.classList.add('open')
        body.classList.add('lock')
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove('open')
        body.classList.remove('lock')
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            modal.classList.remove('open')
            body.classList.remove('lock')
        }
    })

    document.querySelector('.banner__modal .banner__form').addEventListener('click', event => {
        event._isClickWithInModal = true;
        body.classList.remove('lock')
    });

    modal.addEventListener('click', event => {
        if (event._isClickWithInModal) return;
            event.currentTarget.classList.remove('open');
            body.classList.remove('lock')
    });
}


export default modalSubscribe;