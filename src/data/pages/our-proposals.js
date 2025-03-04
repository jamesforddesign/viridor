module.exports = {
    title: {
        en: "Our proposals",
        cy: "Our proposals",
    },

    navOrder: 2,

    socialImage: "/assets/images/home-2.webp",

    permalink: {
        en: "our-proposals",
        cy: "our-proposals-cy"
    },

    parent: {
        en: "",
        cy: "",
    },

    blocks: [
        {
            type: "hero",
            variant: "square", // rounded, square, block, gradient

            title: {
                en: "Our proposals",
                cy: "",
            },
            background: "/hero-2.webp"

        },
        {
            type: "text",
            bgColour: "white",
            image: "/home-2.webp",
            caption: "CGI showing what we anticipate our proposed carbon capture infrastructure to look like. Please note this is indicative and subject to change as our application progresses. ",
            zoomable: true,
            size: 2,

            
        },
        {
            type: "text",
            bgColour: "white",
            content: {
                en: `
                    <h2 class="[ fw-bold text-primary ]">Construction</h2>
                    <h4 class="[ fw-normal text-grey-100 ]">If our application is approved, we anticipate starting construction activities in Early 2027, with carbon capture at Runcorn being operational in 2031. </h4>
                    <p>This would require us to use construction laydown areas, where building materials and equipment would be stored, alongside the creation of staff parking and welfare units. We anticipate the main construction access to the laydown area being via Barlow Way, to the south of our site.</p>
                    <p>As part of our planning application, we will be submitting a Construction Environmental Management Plan (CEMP) which will set out the management measures to be employed during construction to avoid or minimise environmental impacts.</p>

                    <div class="[ panel ] [ bg-secondary ] [ text-white ]">
                        <h4 class="[ fw-normal ]">Construction methodology</h4>
                        <p>This section outlines the specifics of our proposals for carbon capture at Runcorn which, if consented, would include the following elements:</p>
                        <ul>
                            <li>Flue gas pre-treatment unit and pre-scrubber</li>
                            <li>CO<sub>2</sub> absorber</li>
                            <li>Wash water section</li>
                            <li>Intercooler section</li>
                            <li>Gas exchanger</li>
                            <li>CO<sub>2</sub> stripper </li>
                            <li>CO<sub>2</sub> compression </li>
                            <li>Thermal reclaimer unit</li>
                            <li>Control and ancillary equipment</li>
                            <li>Flue gas connections to the ERF facility</li>
                            <li>Drainage </li>
                            <li>Utility connections within the site</li>
                            <li>Internal and external Recycling and Energy Recovery Facility (RERF) modifications, as required, to facilitate the new pipework</li>
                            <li>Access, parking and welfare facilities</li>
                            <li>Construction laydown areas</li>
                        </ul>
                    </div>
                    `,
                cy: ``,
            },
            image: "/overview-map.webp",
            caption: "The image above shows the current red line boundary for the planning application. This is the perimeter of land necessary to carry out the proposed project, including areas like access points, parking and landscaping and temporary construction laydown areas.",
            zoomable: true

            
        },
        /*
        {
            type: "text",
            bgColour: "white",
            title: {
                en: "Supporting the local economy",
                cy: ""
            },
            content: {
                en: `
                    <p>Our proposals will also create a net additional impact of 1,300 person-years of employment, equivalent to roughly 370 jobs during the construction phase, as well as approximately 60 permanent jobs during operation and maintenance. This is in addition to the existing jobs required by our ERF facility and would see our Runcorn site increase its contribution to the local economy. </p>
                    `,
                cy: ``,
            },
            contentInvert:{
                en: `
                    <img src="/assets/images/svg/factory.svg" alt="Factory">
                `,
                cy: ``,
                },
            invert: true,
            size: 9,
        },
        {
            type: "text",
            bgColour: "tertiary",
            opacity: "10",
            title: {
                en: "Traffic and transport",
                cy: ""
            },
            content: {
                en: `
                    <p>We are undertaking traffic surveys and counts to understand the impact our proposals could have on traffic and transport in the local area. We expect there to be approximately 117 individual traffic movements per week associated with the construction of our project, but this number will drop once we move into operation. </p>
                    <p>Our application to Halton Borough Council will include a Construction Traffic Management Plan (CTMP) which will detail how we plan to manage construction traffic, including delivery of Abnormal Indivisible Loads (AILs) to site, personnel travel, measures for road cleaning and sustainable site travel measures.</p>
                    `,
                cy: ``,
            },
            invert: true,

        },
        {
            type: "text",
            bgColour: "white",
            title: {
                en: "Air quality impacts",
                cy: ""
            },

            content: {
                en: `
                    <p>The Environmental Permit for our plans for carbon capture at Runcorn is going through final stages of determination, and we expect it to be issued soon. The Environment Agency has determined that the air quality impacts associated with our proposals are acceptable.</p>
                    `,
                cy: ``,
            },
            size: 9,
            contentInvert:{
                en: `
                    <img src="/assets/images/svg/landfill.svg" alt="Landfill">
                `,
                cy: ``,
                },
            invert: true,
        },
        {
            type: "text",
            bgColour: "tertiary",
            opacity: "10",
            title: {
                en: "Noise impacts",
                cy: ""
            },
            size: 9,
            content: {
                en: `
                    <p>Extensive baseline noise surveys have been undertaken and the design process is underway, with noise a significant factor in that. The site is being designed so that the noise levels from the new carbon capture plant do not result in any increase in overall noise levels from the ERF. This commitment is in place following consultation with the Environment Agency.</p>
                    <p>Additionally, noise from construction would be limited to between 7:30am – 6pm Monday to Friday and from 8:30am – 2pm on Saturdays. </p>
                    `,
                cy: ``,
            },
            contentInvert:{
                en: `
                    <img src="/assets/images/svg/recycle-truck.svg" alt="Recycle Truck">
                `,
                cy: ``,
                },
            invert: true,
        }
            */
        {
            type: "carousel",
        }
    ]
};
