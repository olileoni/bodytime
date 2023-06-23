const accordion = document.querySelectorAll('.price__item');

const priceSubscribe = accordion.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const content = self.querySelector('.price__list');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
           
        })
    })

export default priceSubscribe;
