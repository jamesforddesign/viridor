/*------------------------------------*\
    MODULES
\*------------------------------------*/
import InputSoftLimit from '../modules/input-soft-limit';

/*------------------------------------*\
    CHARACTER COUNT
\*------------------------------------*/
class CharacterCount {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
    }

    init() {
		const inputSoftLimitInstance = new InputSoftLimit({
		  submitButton: '.feedback-form-submit',
		  inputInvalidClass: 'is-invalid'
        });
        
        inputSoftLimitInstance.init();
    }
}

export default CharacterCount;
