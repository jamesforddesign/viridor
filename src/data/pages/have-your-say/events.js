module.exports = {
    title: {
        en: "Events",
        cy: "Digwyddiadau"
    },

    navOrder: 3,

    permalink: {
        en: "have-your-say/events",
        cy: "dweud-eich-dweud/digwyddiadau"
    },

    parent: {
        en: "have-your-say",
        cy: "dweud-eich-dweud"
    },

    blocks: [
        {
            type: "hero",
            title: {
                en: "Events",
                cy: "Digwyddiadau"
            },
        },
        {
            type: "breadcrumbs"
        },
        {
            type: "table",
            bgColour: "white",

            title: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },

            columns: [
                {
                    title: {
                        en: "Location",
                        cy: "Lleoliad"
                    },
                    width: "50%"
                },
                {
                    title: {
                        en: "Time",
                        cy: "Amser"
                    },
                    width: "25%"
                },
                {
                    title: {
                        en: "Date",
                        cy: "Dyddiad"
                    },
                    width: "25%"
                }
            ],

            rows: [
                [
                    {
                        en: `Montpellier Dr </br>
                            Cheltenham </br>
                            GL50 1TA`,
                        cy: `Montpellier Dr </br>
                            Cheltenham </br>
                            GL50 1TA`
                    },
                    {
                        en: "3pm - 7pm",
                        cy: "3pm - 7pm"
                    },
                    {
                        en: "Wedenesday 06 November 2024",
                        cy: "Dydd Mercher, 06 Tachwedd 2024"
                    }
                ],
                [
                    {
                        en: `Montpellier Dr </br>
                            Cheltenham </br>
                            GL50 1TA`,
                        cy: `Montpellier Dr </br>
                            Cheltenham </br>
                            GL50 1TA`
                    },
                    {
                        en: "4pm - 8pm",
                        cy: "4pm - 8pm"
                    },
                    {
                        en: "Thursday 07 November 2024",
                        cy: "Dydd Mercher, 07 Tachwedd 2024"
                    }
                ]
            ]
        },
        {
            type: "banner",
            variant: "split", // left, right, center, split

            background: "/mountain-3.jpg",
            bgColour: "primary", // Enter SCSS variable

            highlight: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },

            title: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },

            subtitle: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },

            description: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, tellus nec molestie cursus.",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, tellus nec molestie cursus."
            },

            ctas: [
                {
                    title: {
                        en: "Register for updates",
                        cy: "CY Register for updates"
                    },

                    url: {
                        en: "#",
                        cy: "#"
                    },
                },
                {
                    title: {
                        en: "External link",
                        cy: "CY External link"
                    },

                    url: {
                        en: "#",
                        cy: "#"
                    },

                    external: true,
                    bgColour: "white",
                    outline: true
                }
            ]
        }
    ]
};
