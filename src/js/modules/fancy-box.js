import { Fancybox } from "@fancyapps/ui";

class FancyBox {
    constructor(passedElement) {
        this.elem = passedElement;
    }

    init() {

        Fancybox.bind('[data-fancybox]', {
            // Your custom options
          });   
    
          // Set custom options for elements with the `data-fancybox="gallery"` attribute
          Fancybox.bind('[data-fancybox="gallery"]', {
            // Your custom options
          });  
    }
}


export default FancyBox;
