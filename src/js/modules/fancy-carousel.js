import { Fancybox } from "@fancyapps/ui";

class FancyCarousel {
    constructor(passedElement) {
        this.elem = passedElement;
    }

    init() {
        if (!this.elem) return;

        // Bind Fancybox to elements with `data-fancybox`
        Fancybox.bind("[data-fancybox]", {
            Thumbs: {
                autoStart: true, // Enable thumbnails
            },
            Toolbar: {
                display: ["zoom", "slideShow", "fullScreen", "close"], // Toolbar options
            },
        });

        // Bind Fancybox specifically for galleries
        Fancybox.bind("[data-fancybox='gallery']", {
            infinite: true, // Infinite loop
            transitionEffect: "fade", // Fade transition
        });
    }
}

export default FancyCarousel;
