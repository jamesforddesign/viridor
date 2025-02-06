/*------------------------------------*\
    FEEDBACK STORAGE LIMIT
\*------------------------------------*/
class FeedbackStorageLimit {
	constructor(passedElement) {
		let self = this;

		self.elem = passedElement;
		self.feedbackReady = document.querySelector('[data-feedback-ready]');
	}

	init() {
		let self = this;

        let all_values = '';
        
        // Loop through stored local storage values
        for (let key in window.localStorage) {
            if(window.localStorage.hasOwnProperty(key)) {
                all_values += window.localStorage[key];
            }
        }
        
        // Calculate stored values in KB
        all_values = ((all_values.length * 16) / (8 * 1024));

        // Compare value to max allowed limit (3MB)
        if (all_values > process.env.MAX_STORAGE_LIMIT) {
            // Show error message
            self.elem.classList.remove('d-none');

            // Hide submit button
            if (self.feedbackReady) {
                self.feedbackReady.classList.add('d-none');
            }
        }
	}
}

export default FeedbackStorageLimit;