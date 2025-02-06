module.exports = {
    title: {
        en: "FAQs",
        cy: "Cwestiynau Cyffredin",
    },

    navOrder: 4,

    permalink: {
        en: "faqs",
        cy: "cwestiynau-cyffredin"
    },

    parent: {
        en: "",
        cy: "",
    },

    blocks: [
        {
            type: "hero",
            title: {
                en: "FAQs",
                cy: "Cwestiynau Cyffredin",
            },
        },
        {
            type: "breadcrumbs"
        },
        {
            type: "accordion",
            variant: "faqs", // faq, downloads

            bgColour: "white",

            data: "faqs"
        },
        {
            type: "banner",
            variant: "split", // left, right, center, split

            background: "/mountain-3.jpg",
            bgColour: "primary", // Enter SCSS variable

            highlight: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },

            title: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },

            subtitle: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },

            description: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, tellus nec molestie cursus.",
                cy: "CY Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, tellus nec molestie cursus.",
            },

            ctas: [
                {
                    title: {
                        en: "Register for updates",
                        cy: "CY Register for updates",
                    },

                    url: {
                        en: "#",
                        cy: "#",
                    },
                },
                {
                    title: {
                        en: "External link",
                        cy: "CY External link",
                    },

                    url: {
                        en: "#",
                        cy: "#",
                    },

                    external: true,
                    bgColour: "white",
                    outline: true,
                }
            ]
        }
    ]
}
