/*------------------------------------*\
    MODULES
\*------------------------------------*/
import Flickity from "flickity";
require("flickity-sync");
require("flickity-as-nav-for");

/*------------------------------------*\
    Carousel
\*------------------------------------*/
class Carousel {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
        self.carouselElem = self.elem.querySelector('[data-carousel]');
    }

    init() {
        let self = this;

        self.getCarousel();
    }

    getCarousel() {
        let self = this;

        const flktyPrimary = new Flickity(self.carouselElem, {
            // autoPlay: true,
            contain: true,
            wrapAround: true,
            draggable: false,
            prevNextButtons: true
        });
    }
}

export default Carousel;
