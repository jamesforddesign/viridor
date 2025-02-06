/*------------------------------------*\
    Accordion
\*------------------------------------*/
class Accordion {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
    }

    init() {
        if (location.hash !== null && location.hash !== "") {
            let element = document.querySelector(`${location.hash}.collapse`);

            if (element) {
                element.classList.add("show");
            }
        }
    }
}

export default Accordion;