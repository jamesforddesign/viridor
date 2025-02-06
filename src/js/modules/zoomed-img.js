/*------------------------------------*\
    MODULES
\*------------------------------------*/
import mediumZoom from 'medium-zoom';
import getBreakpoint from "../helpers/get-breakpoint";

/*------------------------------------*\
    ZOOMED IMG
\*------------------------------------*/
class ZoomedImg {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;

        self.mobileBreakpoints = ['md', 'lg', 'xl'];
    }

    init() {
        let self = this;

        const img = self.elem.querySelectorAll('[zoomed-img]');

        self.elem.children[0].addEventListener("click", (e) => {
            mediumZoom(img[0]);
        });

        if (self.mobileBreakpoints.includes(getBreakpoint())) {
            mediumZoom(img);
        }
    }

}

export default ZoomedImg;
