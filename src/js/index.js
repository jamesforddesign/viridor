import Bugsnag from "@bugsnag/js";
import TypeMate from 'typemate';

/*------------------------------------*\
    MODULES
\*------------------------------------*/
import Accordion from './modules/accordion';
import Carousel from './modules/carousel';
import CharacterCount from './modules/character-count';
import FancyBox from './modules/fancy-box';
import FancyCarousel from './modules/fancy-carousel';
import FeedbackChangeTracker from './modules/feedback-change-tracker';
import FeedbackProgress from './modules/feedback-progress';
import FeedbackResponse from './modules/feedback-response';
import FeedbackReview from './modules/feedback-review';
import FeedbackSave from './modules/feedback-save';
import FeedbackSectionProgress from './modules/feedback-section-progress';
import FeedbackStorageLimit from "./modules/feedback-storage-limit";
import FieldValidation from './modules/field-validation';
import Header from './modules/header';
import Map from './modules/map';
import PasteWarning from './modules/paste-warning';
import Search from "./modules/search";
import ZoomedImg from './modules/zoomed-img';

// Bootstrap
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';

/*------------------------------------*
    APP
\*------------------------------------*/
const app = {

    init() {
        this.noJs();
        this.alwaysLoad();
        this.nodelistPolyfill();
        this.bind();
    },

    bind() {
        // Load any items that need modules
        let modulePlaceHolders = [...document.querySelectorAll('[data-module]')];

        // No modules so bail
        if (!modulePlaceHolders.length) {
            return;
        }

        modulePlaceHolders.map((item) => {
            // Attempt to load any modules
            let modules = item.getAttribute('data-module');

            if (!modules.length) {
                return false;
            }

            // Split the modules into an array
            modules = modules.trim().split(',');

            // Loop and bind to relevant modules
            modules.map((module) => {
                switch (module.trim()) {
                    case 'accordion':
                        let AccordionInstance = new Accordion(item);

                        AccordionInstance.init();

                        break;

                    case 'carousel':

                        let carouselInstance = new Carousel(item);

                        carouselInstance.init();

                        break;

                    case 'character-count':

                        let characterCountInstance = new CharacterCount(item);

                        characterCountInstance.init();

                        break;

                    case 'fancy-box':

                        let fancyBoxInstance = new FancyBox(item);

                        fancyBoxInstance.init();

                        break;

                    case 'fancy-carousel':

                        let fancyCarouselInstance = new FancyCarousel(item);

                        fancyCarouselInstance.init();

                        break;

                    case 'feedback-change-tracker':

                        let feedbackChangeTrackerInstance = new FeedbackChangeTracker(item);

                        feedbackChangeTrackerInstance.init();

                        break;

                    case 'feedback-progress':

                        let feedbackProgressInstance = new FeedbackProgress(item);

                        feedbackProgressInstance.init();

                        break;

                    case 'feedback-response':

                        let feedbackResponseInstance = new FeedbackResponse(item);

                        feedbackResponseInstance.init();

                        break;

                    case 'feedback-section-progress':

                        let feedbackSectionProgressInstance = new FeedbackSectionProgress(item);

                        feedbackSectionProgressInstance.init();

                        break;

                    case 'feedback-review':

                        let feedbackReviewInstance = new FeedbackReview(item);

                        feedbackReviewInstance.init();

                        break;

                    case 'feedback-save':

                        let feedbackSaveInstance = new FeedbackSave(item);

                        feedbackSaveInstance.init();

                        break;

                    case 'feedback-storage-limit':

                        let feedbackStorageLimitInstance = new FeedbackStorageLimit(item);

                        feedbackStorageLimitInstance.init();

                        break;

                    case 'field-validation':

                        let fieldValidationInstance = new FieldValidation(item);

                        fieldValidationInstance.init();

                        break;

                    case 'header':

                        let headerInstance = new Header(item);

                        headerInstance.init();

                        break;

                    case 'map':

                        let mapInstance = new Map(item);

                        mapInstance.init();

                        break;

                    case 'paste-warning':

                        let pasteWarningInstance = new PasteWarning(item);

                        pasteWarningInstance.init();

                        break;

                    case "search":

                        let searchInstance = new Search(item);

                        searchInstance.init();

                        break;

                    case 'zoomed-image':

                        let zoomedImageInstance = new ZoomedImg(item);

                        zoomedImageInstance.init();

                        break;
                }
            });
        });
    },

    alwaysLoad() {
        const typeMateInstance = new TypeMate();

        typeMateInstance.apply();

        if (process.env.BUGSNAG_API_KEY) {
            Bugsnag.start({
                apiKey: process.env.BUGSNAG_API_KEY,
                releaseStage: process.env.RELEASE_ENV,
            });
        }
    },

    noJs() {
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
    },

    nodelistPolyfill() {
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;

                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }
};

// Launch
app.init();