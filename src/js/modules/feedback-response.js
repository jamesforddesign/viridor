/*------------------------------------*\
    FEEDBACK RESPONSE
\*------------------------------------*/
class FeedbackResponse {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
    }

    init() {
        let self = this;
        let response = JSON.parse(localStorage.getItem(self.elem.dataset.response));

        if (response && response.value != '') {
            if (Array.isArray(response.value)) {
                self.elem.innerHTML = '<div class="[ d-flex align-items-center gap-1 ]"><span class="[ feedback-form__response-checkmark ]"><svg height="22" width="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" fill="none"><polyline stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(11.428138, 11.000000) scale(-1, 1) rotate(-180.000000) translate(-11.428138, -11.000000)" points="15.8562762 14 9.85627618 8 7 10.8562315"></polyline></svg></span> ' + response.translatedValue.join('</div><div class="[ d-flex align-items-center gap-1 ] [ mt-1 ]"><span class="[ feedback-form__response-checkmark ]"><svg height="22" width="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" fill="none"><polyline stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(11.428138, 11.000000) scale(-1, 1) rotate(-180.000000) translate(-11.428138, -11.000000)" points="15.8562762 14 9.85627618 8 7 10.8562315"></polyline></svg></span>');
            } else {
                self.elem.innerHTML = self.nl2br(response.value);
            }
        }
    }

    // Convert carriage returns to line breaks for displaying textarea content in the review
    nl2br(str, is_xhtml) {
        if (typeof str === "undefined" || str === null) {
            return "";
        }

        let breakTag = is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br>";
        
        return (str + "").replace(
            /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
            "$1" + breakTag + "$2"
        );
    }
}

export default FeedbackResponse;