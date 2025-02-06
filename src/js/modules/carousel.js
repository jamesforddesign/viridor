import Flickity from "flickity";

/*------------------------------------*\
    Carousel
\*------------------------------------*/
class Carousel {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
    }

    init() {
        let self = this;

        const flkty = new Flickity(self.elem, {
            adaptiveHeight: true,
            autoPlay: false,
            draggable: true,
            prevNextButtons: false,
            wrapAround: true
        });
    }
}

export default Carousel;
