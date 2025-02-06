/*------------------------------------*\
    MODULES
\*------------------------------------*/
import Fuse from 'fuse.js';
import clickOutside from 'click-outside';
import getLanguage from '../helpers/get-language';

const translations = require('../../site/_data/translations');

/*------------------------------------*\
    SEARCH
\*------------------------------------*/
class Search {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;

        self.searchInput = self.elem.querySelector('[data-search-input]');
        self.searchResults = self.elem.querySelector('[data-search-results]');
        self.searchToggle = self.elem.querySelector('[data-search-toggle]');
        self.searchContainer = self.elem.querySelector('[data-search-container]');
    }

    init() {
        let self = this;

        self.search();
        self.setFocus();
        self.toggle();
    }

    search() {
        let self = this;

        fetch(`/search-${getLanguage()}.json`)
            .then((response) => response.json())
            .then((response) => {
                const fuse = new Fuse(response, {
                    keys: [
                        {
                            name: 'title',
                            weight: 3
                        }
                    ],
                    ignoreLocation: true,
                    threshold: 0.0
                });

                self.searchInput.addEventListener('input', () => {
                    // Get search results
                    let result = fuse.search(self.searchInput.value.trim());

                    if (self.searchInput.value.trim().length === 0) {
                        self.searchResults.classList.add('d-none');
                        self.searchInput.classList.remove('has-results');
                    } else if(result.length === 0) {
                        self.searchResults.innerHTML = '';

                        self.searchResults.classList.remove('d-none');
                        self.searchInput.classList.add('has-results');

                        let item = document.createElement('div');
                            
                        item.classList.add('search__results-item');
                        item.classList.add('disabled');
                        item.textContent = translations.noSearchResults[getLanguage()];
                                                        
                        self.searchResults.append(item);
                    } else {
                        self.searchResults.classList.remove('d-none');
                        self.searchInput.classList.add('has-results');

                        self.searchResults.innerHTML = '';

                        for (let search in result.slice(0, 8)) {
                            let item = document.createElement('a');
                            
                            item.classList.add('search__results-item');
                            item.href = result[search].item.path;
                            item.textContent = result[search].item.title;
                                                        
                            self.searchResults.append(item);
                        }
                    }
                });
            });
    }

    toggle() {
        let self = this;

        const body = document.querySelector('body');
        const nav = document.querySelector('[data-nav]');
        const hamburger = document.querySelector('[data-nav-toggle]');

        self.searchToggle.onclick = function () {
            // Toggle visibility of search
            self.searchContainer.classList.toggle('d-none');

            // Toggle scrolling on body
            body.classList.toggle('is-no-scroll');

            // Toggle visibility on nav
            nav.classList.remove('is-active');

            // Toggle active class on hamburger
            hamburger.classList.remove('is-active');
        }
    }

    setFocus() {
        let self = this;

        self.searchInput.addEventListener('focus', () => {
            // Toggle active state of input
            self.searchInput.classList.add('is-active');
        });

        clickOutside(self.searchInput, () => {
            // Toggle active state of input
            self.searchInput.classList.remove('is-active');
            self.searchInput.classList.remove('has-results');

            // Toggle visibility of results
            self.searchResults.classList.add('d-none');
        });
    }
}

export default Search;