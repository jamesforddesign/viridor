import getLanguage from '../helpers/get-language';

const translations = require('../../site/_data/translations');

/*------------------------------------*\
    PASTE WARNING
\*------------------------------------*/
class PasteWarning {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
    }

    init() {
        let self = this;

        self.elem.addEventListener('paste', () => {
            alert(translations.dialoguePasteWarning[getLanguage()]);
        });
    }
}

export default PasteWarning;
