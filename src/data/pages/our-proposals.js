module.exports = {
    title: {
        en: "Our proposals",
        cy: "Our proposals",
    },

    navOrder: 2,

    socialImage: "https://placehold.co/700x400",

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

        },
        {
            type: "text",
            bgColour: "white",
            title: {
                en: "Construction methodology",
                cy: ""
            },
            content: {
                en: `
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
                        <li>Internal and external RERF facility modifications, as required, to facilitate the new pipework</li>
                        <li>Access, parking and welfare facilities</li>
                        <li>Construction laydown areas</li>

                    </ul>
                    `,
                cy: ``,
            },
            
        },
        {
            type: "text",
            title: {
                en: "Construction",
                cy: ""
            },
            invert: true,
            bgColour: "tertiary",
            opacity: "10",
            content: {
                en: `
                    <p>If our application is approved, we anticipate starting construction activities in Spring 2027, with carbon capture at Runcorn being operational by December 2029. </p>
                    <p>This would require us to use construction laydown areas, where building materials and equipment would be stored, alongside the creation of staff parking and welfare units. We anticipate the main construction access to the laydown area being via Barlow Way, to the south of our site.</p>
                    <p>As part of our planning application, we will be submitting a Construction Environmental Management Plan (CEMP) which will set out the management measures to be employed during construction to avoid or minimise environmental impacts.</p>
                    `,
                cy: ``,
            },

        },
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
    ]
};
