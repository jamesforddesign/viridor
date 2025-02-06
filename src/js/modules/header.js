/*------------------------------------*\
    MODULES
\*------------------------------------*/
import getBreakpoint from "../helpers/get-breakpoint";
import clickOutside from 'click-outside';

/*------------------------------------*\
    NAV
\*------------------------------------*/
class Header {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
        self.hamburger = self.elem.querySelector('[data-nav-toggle]');
        self.nav = self.elem.querySelector('[data-nav]');

        // Specify the breakpoints where the mobile nav is used.
        // If the $navigation-breakpoint SASS variable is changed, this should be updated to match.
        self.mobileBreakpoints = ['xs', 'sm', 'md'];

        self.mainDropdown = self.elem.querySelector('[data-nav-dropdown]');
        self.dropdowns = self.elem.querySelectorAll('[data-dropdown-item]');
    }

    init() {
        let self = this;

        if (self.nav) {
            self.navToggle();
            this.dropdownsToggle();
        }
    }

    // Function to toggle nav visibility
    navToggle() {
        let self = this;

        const body = document.querySelector('body');
        const search = document.querySelector('[data-search-container]');

        self.hamburger.addEventListener('click', (evt) => {
            // Scroll the nav to the top
            self.elem.scrollTop = 0;

            // Toggle active class on toggle button
            self.hamburger.classList.toggle('is-active');

            // Toggle active class on nav
            self.nav.classList.toggle('is-active');

            // Toggle scrolling on body
            body.classList.toggle('is-no-scroll');

            // Toggle visibility on search
            search.classList.add('d-none');
        });
    }

    // Function to set the height of the nav panel on mobile
    setNavHeight() {
        let self = this;

        // Get the header height
        let headerHeight = self.elem.offsetHeight;

        if (self.mobileBreakpoints.includes(getBreakpoint())) {
            // If were are on mobile, set the nav height to 100vh minus the header height
            self.nav.style.height = `calc(100% - ${headerHeight}px)`;
        }
    }

    dropdownsToggle() {
        let self = this;

        Array.from(self.dropdowns).map(item => {

            let trigger = item.querySelector('[data-dropdown-trigger]');


            trigger.addEventListener('click', evt => {

                evt.preventDefault();

                if (item.classList.contains('is-active')) {
                    item.classList.remove('is-active');

                    trigger.setAttribute('aria-expanded', false);
                } else {
                    item.classList.add('is-active');

                    trigger.setAttribute('aria-expanded', true);
                }
            });

            clickOutside(item, () => {
                item.classList.remove('is-active');

                trigger.setAttribute('aria-expanded', false);
            });
        });
    }
}

export default Header;