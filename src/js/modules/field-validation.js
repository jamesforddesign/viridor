import getLanguage from '../helpers/get-language';

const translations = require('../../site/_data/translations');

class FieldValidation {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
        self.validateFields = document.querySelector('[data-save-button]');
        self.field = self.elem.querySelector('[data-validate-field]');
        self.validationMessage = self.elem.querySelector('[data-validation-message]');
    }

    init() {
        let self = this;

        self.validateFields.addEventListener('click', (evt) => {
            evt.preventDefault();

            if (self.field.required) {
                self.validateField();
            }
        });
    }

    validateField() {
        let self = this;

        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const inputText = self.field.value.trim();
            
        if (self.field.type == 'email') {
            if (inputText.match(emailFormat)) {
                self.validationMessage.classList.add('d-none');
                self.field.classList.remove('is-invalid');

                return true;
            } else {
                self.validationMessage.classList.remove('d-none');
                self.validationMessage.innetText = translations.checkEmailAddressError[getLanguage()];
                self.field.classList.add('is-invalid');
                    
                return false;
            }
        }

        if (['checkbox', 'radio'].includes(self.field.type)) {
            if (self.field.checked) {
                self.validationMessage.classList.add('d-none');
                self.field.classList.remove('is-invalid');

                return true;
            } else {
                self.validationMessage.classList.remove('d-none');
                self.validationMessage.innerText = translations.requiredCheckboxFieldError[getLanguage()];
                self.field.classList.add('is-invalid');
                
                return false;
            }
        }
        
        if (inputText !== '') {
            self.validationMessage.classList.add('d-none');
            self.field.classList.remove('is-invalid');
            
            return true;
        } else {
            self.validationMessage.classList.remove('d-none');
            self.validationMessage.innerText = `${self.field.dataset.label} ${translations.requiredTextFieldError[getLanguage()]}`;
            self.field.classList.add('is-invalid');
                
            return false;
        }
    }
}

export default FieldValidation;