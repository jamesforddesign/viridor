/*------------------------------------*\
    MODULES
\*------------------------------------*/
import Carousel from "./carousel.js";
import loadGoogleMapsApi from "load-google-maps-api";
import 'whatwg-fetch';

/*------------------------------------*\
    Map
\*------------------------------------*/
class Map {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
        self.apiKey = self.elem.getAttribute('data-key');

        self.mapElem = self.elem.querySelector('[data-map]');
        self.mapCenterLat = self.mapElem.dataset.mapCenterLat;
        self.mapCenterLng = self.mapElem.dataset.mapCenterLng;
        self.mapMaxZoom = self.mapElem.dataset.mapMaxZoom;
        self.mapZoom = self.mapElem.dataset.mapZoom;
        self.mapOverlay = self.mapElem.dataset.mapOverlay;

        self.addressForm = self.elem.querySelector('[data-map-address-form]');
        self.addressFormInput = self.elem.querySelector('[data-map-address-form-input]');

        self.sectionItems = self.elem.querySelectorAll('[data-section-item]');

        self.breakdown = self.elem.querySelectorAll('[data-section-breakdown]');
        self.breakdownItemButtons = self.elem.querySelectorAll('[data-section-breakdown-item-btn]');

        self.setMarkers = [];
    }

    init() {
        let self = this;

        // Load the Google Maps API, passing in our API key
        loadGoogleMapsApi({ key: self.apiKey }).then(function (googleMaps) {
            // Call the function that initialises the rendering of the map
            self.googleMaps = googleMaps;

            self.addressForm.addEventListener('submit', self.getAddressFormSubmission.bind(self));

            // Render the map
            self.renderMap();

            // Listen for click events
            self.clickEvents();
        }).catch(function (error) {
            console.error(error)
        });

        // Toggle section breakdown dropdown
        self.toggleBreakdownOpen();
    }

    /*-------------------------------------------------*\
        Render map
    \*-------------------------------------------------*/
    renderMap() {
        let self = this;

        let maxZoom = 15;
        let zoom = 10;

        if (self.mapMaxZoom && self.mapZoom) {
            maxZoom = Number(self.mapMaxZoom);
            zoom = Number(self.mapZoom);
        }

        // Create the map options
        let mapOptions = {
            center: new self.googleMaps.LatLng(self.mapCenterLat, self.mapCenterLng),
            disableDefaultUI: true,
            mapTypeId: "hybrid",
            maxZoom: maxZoom,
            zoom: zoom,
            zoomControl: true
        };

        // Create the map
        self.map = new self.googleMaps.Map(self.mapElem, mapOptions);

        // Render overlays
        self.renderOverlay();

        // Load the first section
        self.goToSection(self.sectionItems[0], 13);
    }

    /*-------------------------------------------------*\
        Render overlay
    \*-------------------------------------------------*/
    renderOverlay() {
        let self = this;

        // Create overlay
        const overlay = new google.maps.KmlLayer(process.env.ASSETS_BASE_URL+self.mapOverlay);

        // Add overlay to map
        overlay.setMap(self.map);
    }

    /*-------------------------------------------------*\
        Click events
    \*-------------------------------------------------*/
    clickEvents() {
        let self = this;

        self.sectionItems.forEach(item => {
            item.addEventListener('click', function() {
                // Clear all markers from the map
                self.clearMarkers();
                self.goToSection(item, 13);
                self.toggleBreakdown(item);
            });
        });

        self.breakdownItemButtons.forEach(item => {
            item.addEventListener('click', function() {
                self.goToMarker(item, 10);
            });
        });
    }

    goToMarker(item, zoom) {
        let self = this;

        self.map.setCenter(new self.googleMaps.LatLng(item.dataset.breakdownLat, item.dataset.breakdownLng));

        if (self.map.getZoom() < zoom) {
            self.map.setZoom(zoom);
        }
    }

    /*-------------------------------------------------*\
        Toggle breakdown
    \*-------------------------------------------------*/
    toggleBreakdown(section) {
        let self = this;

        self.breakdown.forEach(breakdown => {
            breakdown.classList.remove('is-active');

            if (section.dataset.section == breakdown.dataset.section) {
                breakdown.classList.add('is-active');
            }
        });
    }

    toggleBreakdownOpen() {
        let self = this;

        self.breakdown.forEach(breakdown => {
            let breakdownBtn = breakdown.querySelector('[data-section-breakdown-button]');

            breakdown.classList.remove('is-open');

            breakdownBtn.addEventListener('click', function() {
                breakdown.classList.toggle('is-open');

                if (breakdown.classList.contains('is-open')) {
                    breakdown.setAttribute('aria-expanded', true);
                } else {
                    breakdown.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    /*-------------------------------------------------*\
        Switch to the specified section
    \*-------------------------------------------------*/
    goToSection(section, zoom) {
        let self = this;

        // Remove active class from all sections items
        self.sectionItems.forEach(item => {
            item.classList.remove('is-active');
        });

        // Add active class to clicked button
        section.classList.add('is-active');

        // Render the new set of markers
        self.renderMarkers(section);

        self.map.setCenter(new self.googleMaps.LatLng(section.dataset.sectionLat, section.dataset.sectionLng));

        if (self.map.getZoom() > zoom) {
            self.map.setZoom(zoom);
        }
    }

    /*-------------------------------------------------*\
        Render markers
    \*-------------------------------------------------*/
    renderMarkers(section) {
        let self = this;

        let activites = JSON.parse(section.dataset.sectionActivities);
        let lang = section.dataset.lang;

        // Create empty array to store the markers
        let markers = [];

        // Get the markers from the section data
        activites.map(activity => {
            activity.markers.map(marker => {
                marker.number = activity.number;
                marker.sectionName = section.dataset.sectionName;
                marker.color = activity.color;
                marker.textColor = activity.textColor;
                markers.push(marker);
            });
        });

        // Create a new infoWindow
        let infoWindow = new self.googleMaps.InfoWindow();

        // Create the marker icon
        let icon = {
            path: 'M40.8,20.4A20.4,20.4,0,0,0,0,20.4C0,31.7,20.4,52.8,20.4,52.8S40.8,31.7,40.8,20.4',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 1,
            scale: 1,
            labelOrigin: new google.maps.Point(20, 22),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 53)
        };

        // Create the bounds object, which will be configured later based on the marker locations
        let bounds = new self.googleMaps.LatLngBounds();

        // Loop through the markers
        for (let i = 0; i < markers.length; i++) {
            // Get the marker data
            let markerData = markers[i];

            // Create a new LatLng object to use for the marker position
            let latLng = new self.googleMaps.LatLng(markerData.lat, markerData.lng);

            icon.fillColor = markerData.color;

            // Create the marker object
            let marker = new self.googleMaps.Marker({
                position: latLng,
                map: self.map,
                icon: icon,
                label: {
                    color: markerData.textColor, fontSize: '18px', fontWeight: '600',
                    text: `${markerData.number}`
                },
                title: markerData.description[lang]
            });

            // Add this marker to the self.setMarkers global array
            self.setMarkers.push(marker);

            let media = "";

            if (markerData.media) {
                let str = ``;

                markerData.media.forEach(media => {
                    str += `
                        <div class="[ carousel__item ]">
                            <img src="${process.env.ASSETS_BASE_URL}/${media.url}">
                            <div class="[ wysiwyg ]">
                                <h4>${media.title[lang]}</h4>
                                <p>${media.description[lang]}</p>
                            </div>
                        </div>
                    `;
                });

                media = `
                    <div class="[ carousel carousel--map ]" data-carousel="carousel">
                        ${str}
                    </div>
                `;

                self.googleMaps.event.addListener(infoWindow, 'domready', function() {
                    let carousel = self.elem.querySelector('[data-carousel]');
                    let carouselInstance = new Carousel(carousel);

                    if (carouselInstance.elem != null) {
                        carouselInstance.init();
                    }
                });
            }

            // Handle marker clicks
            self.googleMaps.event.addListener(marker, "click", function (e) {
                // Build the content for the infoWindow
                let infoWindowContent = `
                    <div class="[ map__marker-info ]">
                        <div class="[ wysiwyg ]">
                            <h2>${markerData.sectionName}</h2>
                            ${markerData.description[lang]}
                        </div>
                        ${media}
                    </div>
                `;

                // Add the content to the infoWindow
                infoWindow.setContent(infoWindowContent);
                infoWindow.open(self.map, marker);
            });

            // Work out the area of the map containing markers
            bounds.extend(marker.position);

            // Create global function to center the map with all markers visible
            self.fitAndCenter = function () {
                self.map.setCenter(bounds.getCenter());
                self.map.fitBounds(bounds);
            };

            // Fit and center
            self.fitAndCenter();
        }
    }

    /*-------------------------------------------------*\
        Clear markers
    \*-------------------------------------------------*/
    clearMarkers() {
        let self = this;

        for (let i = 0; i < self.setMarkers.length; i++) {
            self.setMarkers[i].setMap(null);
        }

        self.setMarkers = [];
    }

    /*-------------------------------------------------*\
        Get address form submission
    \*-------------------------------------------------*/
    getAddressFormSubmission(event) {
        let self = this;

        event.preventDefault();

        const address = self.addressFormInput.value;

        if (address.trim() !== '') {
            self.getAddress(address);
        } else {
            console.error('Please provide a postcode');
        }
    }

    /*-------------------------------------------------*\
        Get address
    \*-------------------------------------------------*/
    getAddress(address) {
        let self = this;

        const geocoder = new self.googleMaps.Geocoder();

        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    let icon = {
                        url: process.env.ASSETS_BASE_URL+"/markers/house.svg",
                        scaledSize: new google.maps.Size(60, 60)
                    };

                    let latLng = new self.googleMaps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());

                    let marker = new self.googleMaps.Marker({
                        position: latLng,
                        map: self.map,
                        icon: icon,
                        title: 'address'
                    });

                    self.setMarkers.push(marker);
                } else {
                    console.error('No results found');
                }
            } else {
                console.error(status);
            }
        });
    }
}

export default Map;
