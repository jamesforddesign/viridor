import getLanguage from '../helpers/get-language';

const translations = require('../../site/_data/translations');

/*------------------------------------*\
    FEEDBACK PROGRESS
\*------------------------------------*/
class FeedbackProgress {
	constructor(passedElement) {
		let self = this;

		self.elem = passedElement;
		self.sectionComplete = self.elem.querySelector('[data-feedback-section-complete]');
	}

	init() {
		let self = this;

		if (self.elem.hasAttribute("data-feedback-review") && localStorage.getItem('your-details')) {
			self.elem.classList.remove('d-none');
		}
			
		if (self.sectionComplete) {			
			if (localStorage.getItem(self.sectionComplete.dataset.feedbackSectionComplete)) {
				self.sectionComplete.innerText = translations.complete[getLanguage()];
			}
		}
	}
}

export default FeedbackProgress;
