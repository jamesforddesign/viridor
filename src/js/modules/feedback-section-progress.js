import getLanguage from '../helpers/get-language';

const translations = require('../../site/_data/translations');
const feedback = require("../../data/feedback-form");

var slugify = require('slugify')

/*------------------------------------*\
    FEEDBACK SECTION PROGRESS
\*------------------------------------*/
class FeedbackSectionProgress {
	constructor(passedElement) {
		let self = this;

		self.elem = passedElement;
		self.feedbackSections = feedback;
		self.progressIndicator = self.elem.querySelector('[data-progress-indicator]');
	}

	init() {
		let self = this;

		let completed = [],
			counts = {};
		
		feedback.forEach((section) => {    
			let slug = slugify(section.title['en'], {
				lower: true,
			});

			let answered = JSON.parse(localStorage.getItem(slug))

            // Push to completed array ready to count
            if (answered) {
                completed.push(answered);
            }
        })

        // Count how many items in completed
        for (const num of completed) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
		}
		
		// Only show progress if at least one answer
		if(counts[true]) {
			self.elem.classList.add('d-flex');
		}

        // Print out
        self.progressIndicator.innerHTML = `${(completed.length ? counts[true] : 0)}/${feedback.slice(0, -2).length} ${translations.feedbackSectionsComplete[getLanguage()]}`;
	}
}

export default FeedbackSectionProgress;
