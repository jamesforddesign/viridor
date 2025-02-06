/*------------------------------------*\
    FEEDBACK REVIEW
\*------------------------------------*/
import Bugsnag from "@bugsnag/js";
import Cookies from 'js-cookie';
import getLanguage from '../helpers/get-language';
import axiosFeedbackInstance from "../../../axios-feedback-instance";

const axios = require('axios');
const FormData = require('form-data');

const feedback = require("../../data/feedback-form");
const global = require("../../site/_data/api/global");
const translations = require('../../site/_data/translations');

const formData = new FormData();

class FeedbackReview {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;

        self.feedbackStructure = [];

        // Remove last two items in array - review and success
        self.feedbackSections = feedback.slice(0, -2);

        self.requiredFields = self.elem.querySelector('[data-required-fields]');
        self.feedbackReady = self.elem.querySelector('[data-feedback-ready]');
        self.formErrors = self.elem.querySelector('[data-form-error]');

        // Feedback submit button
        self.feedbackDefault = self.elem.querySelector('[data-feedback-default]');
        self.feedbackSubmitting = self.elem.querySelector('[data-feedback-submitting]');

        // Cookie confirmation
        self.cookiesPending = self.elem.querySelector('[data-cookies-pending]');
        self.cookiesConfirmed = self.elem.querySelector('[data-cookies-confirmed]');
    }

    init() {
        let self = this;

        if (process.env.FEEDBACK_CAPTCHA) {
            self.checkCookiesConfirmed();
        }

        self.populateHiddenFields();
        // self.checkRequiredFields();
        self.submit();
    }

    checkCookiesConfirmed() {
        let self = this;

        let confirmed = Cookies.get(process.env.COOKIE_NAME);

        if (confirmed) {
            self.cookiesPending.classList.add('d-none');
            self.cookiesConfirmed.classList.remove('d-none');
        } else {
            self.cookiesPending.classList.remove('d-none');
            self.cookiesConfirmed.classList.add('d-none');
        }
    }

    checkRequiredFields() {
        let self = this;

        // Check if user's personal details are complete
        if (!localStorage.getItem(self.feedbackStructure.sections[feedback.length - 1])) {
            self.requiredFields.classList.remove("d-none");
            self.feedbackReady.classList.add("d-none");
        }
    }

    populateHiddenFields() {
        let self = this;

        // Get all item from local storage
        let fields = self.getLocalStorage();

        fields.sort(function(a, b){
            if(a.name < b.name) {
                return -1;
            }

            if(a.name > b.name) {
                return 1;
            }

            return 0;
        });

        // Loop through the items
        fields.forEach(field => {
            // Create the markup for a hidden input
            let markup = document.createElement('input');

            markup.setAttribute('type', 'hidden');
            markup.setAttribute('name', field.name);
            markup.setAttribute('value', field.value);

            self.elem.append(markup);
        });
    }

    // Get all items from local storage and convert
    // to array containing an object for each item
    getLocalStorage() {
        let self = this;

        let archive = [],
            keys = Object.keys(localStorage),
            i = 0,
            key;

        // Accept question data from local storage only.
        // Prevents extension keys from interfering with feedback data
        for (; (key = keys[i]); i++) {
            self.feedbackSections.forEach((section) => {
                section.subSections.forEach((subSection) => {
                    subSection.groups.forEach((group) => {
                        group.questions.forEach((question) => {
                            self.buildStoredKey(archive, key, question);
                        })
                    });
                });
            });
        }

        return archive;
    }

    buildStoredKey(archive, key, question) {
        if (key.includes(question.number)) {
            let data = JSON.parse(localStorage.getItem(key));

            if (data) {
                archive.push({
                    name: key,
                    label: data.label,
                    value: data.value,
                });
            }
        }

        if (key.includes(question.name)) {
            let data = JSON.parse(localStorage.getItem(key));

            if (data) {
                archive.push({
                    name: key,
                    label: data.label,
                    value: data.value,
                });
            }
        }
    }

    submit() {
        let self = this;

        // When the form submit button is clicked...
        self.elem.addEventListener("submit", (evt) => {
            // Prevent the form from submitting
            evt.preventDefault();

            self.sendFeedbackReport();
        });
    }

    async sendFeedbackReport() {
        let self = this;

        // Show loading spinner
        self.feedbackDefault.classList.add('d-none');
        self.feedbackSubmitting.classList.remove('d-none');

        self.feedbackSections.forEach((section) => {
            section.subSections.forEach((subSection) => {
                subSection.groups.forEach((group) => {
                    group.questions.forEach((question) => {
                        self.buildFeedbackData(question);
                    })
                });
            });
        });

        // Print out feedback form fields & responses on dev only
        if (process.env.RELEASE_ENV == 'dev') {
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        }

        if (process.env.FEEDBACK_TYPE === 'consultonline') {
            self.mapFeedback();
        } else {
            self.catcherFeedback();
        }
    }

    async mapFeedback() {
        let self = this;

        await axiosFeedbackInstance
            .post(`/api/feedback-form/${process.env.FEEDBACK_MAP_ID}`, formData)
            .then((response) => {
                // Hide loading spinner
                self.feedbackDefault.classList.remove('d-none');
                self.feedbackSubmitting.classList.add('d-none');

                // Submit the form
                self.elem.submit();

                // Redirect to success
                window.location.replace(`${process.env.MULTILINGUAL == 'true' ? '/' + getLanguage() : ''}/${self.feedbackStructure[self.feedbackStructure.length - 1].permalink[getLanguage()]}`);

                // Clear local storage if not local setup
                if (process.env.RELEASE_ENV != 'dev') {
                    localStorage.clear();
                }
            })
            .catch((error) => {
                self.feedbackErrorHandler(error)
            });
    }

    catcherFeedback() {
        let self = this;

        self.elem.method = "POST";

        if (self.elem.dataset.lang == 'en') {
            self.elem.action = `https://catcherv2.jfd.co.uk/f/${process.env.FEEDBACK_CATCHER_ID_EN}`;
        } else if (self.elem.dataset.lang == 'cy') {
            self.elem.action = `https://catcherv2.jfd.co.uk/f/${process.env.FEEDBACK_CATCHER_ID_CY}`;
        }

        self.elem.submit();
    }

    buildFeedbackData(question) {
        let questionValue;
        let databaseColumn = question.number ? `${question.number}-question` : question.name.split("-").pop().trim();

        // Check for question key in local storage which is not null or empty array
        if (
            localStorage.getItem(databaseColumn) &&
            (
                JSON.parse(localStorage.getItem(databaseColumn)).value != '' ||
                JSON.parse(localStorage.getItem(databaseColumn)).value.length
            )
        ) {
            if (Array.isArray(JSON.parse(localStorage.getItem(databaseColumn)).value)) {
                questionValue = JSON.parse(localStorage.getItem(databaseColumn)).value.join(', ');
            } else {
                questionValue = JSON.parse(localStorage.getItem(databaseColumn)).value.trim();
            }

            // Add question data to FormData()
            formData.append(databaseColumn, questionValue);
        }

        // Check if question has additional questions
        if (question.additionalQuestions) {
            let additionalQuestionValue;

            question.additionalQuestions.forEach((additional) => {
                let additionalDatabaseColumn = `${databaseColumn}-${additional.number}`;

                if (localStorage.getItem(additionalDatabaseColumn) && localStorage.getItem(additionalDatabaseColumn).value != '') {
                    additionalQuestionValue = JSON.parse(localStorage.getItem(additionalDatabaseColumn)).value.trim();

                    // Add additional question data to FormData()
                    formData.append(additionalDatabaseColumn, additionalQuestionValue);
                }
            });
        }
    }

    // Show appropriate error message based on response
    feedbackErrorHandler(error) {
        let self = this;

        // Hide loading spinner
        self.feedbackDefault.classList.remove('d-none');
        self.feedbackSubmitting.classList.add('d-none');

        if (axios.isAxiosError(error)) {
            // Send error to Bugsnag
            Bugsnag.notify(error);

            // Declare error message to show to user
            let message = '';

            // Match error code to find message
            switch (error.code) {
                // No internet connection
                case 'ERR_NETWORK':
                    message = translations.dialogueErrorNetwork[getLanguage()];
                    break;
                // Page reloaded / lost connection
                case 'ERR_CANCELED':
                    message = translations.dialogueErrorCancelled[getLanguage()];
                    break;
                // Fails server side field validation
                case 'ERR_BAD_REQUEST':
                    message = translations.dialogueErrorBadRequest[getLanguage()];
                    break;
                // Otherwise...
                default:
                    message = translations.dialogueGenericNetworkError[getLanguage()];
            }

            // Append contact details to end of error message
            message = `${message} ${translations.dialogueProblemsPersist[getLanguage()]} ${global.email}.`;

            // Show error message to user
            self.formErrors.classList.remove('d-none');
            self.formErrors.innerHTML = message;
        }
    }
}

export default FeedbackReview;
