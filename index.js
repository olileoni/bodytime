import burgerSubscribe from "./components/burger.js"
import modalSubscribe from "./components/modal.js"
import sliderSubscribe from "./components/swiper/slider.js"
import priceSubscribe from "./components/price.js"

window.onload = () => {
    burgerSubscribe();
    modalSubscribe();
    sliderSubscribe();
    priceSubscribe();
}
