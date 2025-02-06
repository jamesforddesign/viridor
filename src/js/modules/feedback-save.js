/*------------------------------------*\
    FEEDBACK SAVE
\*------------------------------------*/
class FeedbackSave {
	constructor(passedElement) {
		let self = this;

		self.elem = passedElement;
        self.saveButton = self.elem.querySelector('[data-save-button]');
        self.saveButtonBack = self.elem.querySelector('[data-save-button-back]');
        self.formAction = self.elem.getAttribute('action');
	}

	init() {
		let self = this;

		self.checkLocalStorageAvailable();
		self.populateFields();

		// Listen for click event on form save button
		self.saveButton.addEventListener("click", (evt) => {
			self.saveData();

			// If form is valid...
			if (self.elem.checkValidity()) {
				// Continue to next page
                window.location = self.formAction;
			}
		});

		if (self.saveButtonBack) {
			self.saveButtonBack.addEventListener("click", (evt) => {
				self.saveData();

				// If form is valid...
				if (self.elem.checkValidity()) {
					// Continue to next page
					window.location = self.formAction;
				}
			});
		}
	}

	populateFields() {
		let self = this;

		// Filter out any hidden fields (used for setting defaults for checkbox/radio fields) and loop through
		Array.from(self.elem.elements).filter((field) => field.type !== "hidden").forEach((field) => {
            // Get the field's related value from local storage
            let storedValue = localStorage.getItem(field.name);

            // If a value exists in local storage...
            if (storedValue !== null) {
                // Parse the data we get from local storage
                let storedValueObj = JSON.parse(storedValue);

                // If the field is a checkbox or radio input...
                if (['checkbox', 'radio'].includes(field.type)) {
                    // If the field's value matches what is stored in local storage...
                    if (storedValueObj.value.includes(field.value)) {
                        field.checked = true;
                    } else {
                        // Uncheck the checkbox/radio
                        field.checked = false;
                    }
                } else {
                    if (storedValueObj.value.length > 0) {
                        field.value = this.escapeValue(storedValueObj.value);
                    }
                }
            }
        });
	}

    saveData() {
        let self = this;

        // Loop through the form's fields
        Array.from(self.elem.elements).forEach(field => {
            if (self.elem.checkValidity()) {
                if (! ['checkbox', 'radio'].includes(field.type)) {
                    // Add the field's name, label and value to local storage
                    localStorage.setItem(
                        field.name,
                        JSON.stringify({
                            'label': field.dataset.label,
                            'value': this.escapeValue(field.value)
                        })
                    );
                } else {
                    self.storeArrayValue(field);
                }

                // Mark field's section as complete when answered
                if((field.dataset.section && field.dataset.section !== '') && field.value != '') {
                    localStorage.setItem(field.dataset.section, true);
                }
            }
        });

        localStorage.removeItem("");
    }

    storeArrayValue(field) {
        let fields = document.getElementsByName(field.name);
        let options = [];
        let translatedOptions = [];

        for (var i = 0; i < fields.length; i++) {
            if (fields[i].checked) {
                // If checked, add the value to the array
                options.push(fields[i].value);

                // Also push the translated value to an array
                translatedOptions.push(fields[i].dataset.translatedValue);
            }
        }
        
        // Add the field's name, label and value to local storage (JSON stringify the label and value)
        localStorage.setItem(
            field.name,
            JSON.stringify({
                'label': field.dataset.label,
                'value': options,
                'translatedValue': translatedOptions,
            })
        );
    }

    checkLocalStorageAvailable() {
        let self = this;

        try {
            let test = window.localStorage;
        } catch(e) {
            let form = self.elem.querySelector('[data-feedback-form]');
            form.classList.add('d-none');

            let nav = document.querySelector('[data-feedback-nav]');
            nav.classList.add('d-none');

            let warning = document.querySelector('[data-storage-warning]');
            warning.classList.remove('d-none');
        }

    }

    escapeValue(value) {
        if (typeof value === 'string') {
            return value ? value.replace(/</g,"&lt;").replace(/>/g, "&gt;") : value;
        }
	}
}

export default FeedbackSave;
