import getLanguage from '../helpers/get-language';

const translations = require('../../site/_data/translations');

/*------------------------------------*\
    FEEDBACK CHANGE TRACKER
\*------------------------------------*/
class FeedbackChangeTracker {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
        self.inputs = self.elem.querySelectorAll('input, textarea, select');
        self.saveBtn = self.elem.querySelector('[data-save-button]');
    }

    init() {
        let self = this;

        // Loop through form inputs
        [...self.inputs].map(input => {
            // Get the current value
            let value = input.value;
            // Set a data-dirty attribute to false
            input.setAttribute('data-dirty', false);

            // When the input's value changes
            input.addEventListener('input', evt => {
                if (input.value !== value) {
                    // If it's changed, set the data-dirty attribute to true
                    input.setAttribute('data-dirty', true);
                } else {
                    // Otherwise, set it to false
                    input.setAttribute('data-dirty', false);
                }
            });
        });

        // When the user attempts to leave the page
        window.addEventListener('beforeunload', evt => {
            // Get all changed inputs
            let changedInputs = self.elem.querySelectorAll('[data-dirty="true"]');

            // If there is at least one changed input
            // and the clicked element is not the form's submit button
            if(changedInputs.length > 0 && !evt.target.activeElement.hasAttribute('data-save-button')) {
                // Show a warning
                evt.preventDefault();

                // evt.returnValue property now deprecated but left in for older browsers
                return (evt.returnValue = translations.dialogueChangeTracker[getLanguage()]);
            }
        });
    }
}

export default FeedbackChangeTracker;
