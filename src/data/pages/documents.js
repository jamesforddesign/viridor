module.exports = {
    title: {
        en: "Documents",
        cy: "Dogfennau"
    },

    navOrder: 2,

    permalink: {
        en: "documents",
        cy: "dogfennau"
    },

    parent: {
        en: "",
        cy: ""
    },

    blocks: [
        {
            type: "hero",
            title: {
                en: "Documents",
                cy: "Dogfennau"
            },
        },
        {
            type: "breadcrumbs"
        },
        {
            type: "accordion",
            variant: "downloads", // faq, downloads

            bgColour: "white",

            data: [
                {
                    title: {
                        en: "Example accordion heading",
                        cy: "CY Example accordion heading"
                    },

                    sections: [
                        {
                            title: {
                                en: "Example section heading",
                                cy: "CY Example section heading"
                            },

                            documents: [
                                {
                                    title: {
                                        en: "Example download",
                                        cy: "CY Example download"
                                    },

                                    url: {
                                        en: "#",
                                        cy: "#"
                                    },
                                },
                                {
                                    title: {
                                        en: "Example download",
                                        cy: "CY Example download"
                                    },

                                    url: {
                                        en: "#",
                                        cy: "#"
                                    },
                                },
                                {
                                    title: {
                                        en: "Example download",
                                        cy: "CY Example download"
                                    },

                                    url: {
                                        en: "#",
                                        cy: "#"
                                    },
                                },
                                {
                                    title: {
                                        en: "Example download",
                                        cy: "CY Example download"
                                    },

                                    url: {
                                        en: "#",
                                        cy: "#"
                                    },
                                }
                            ]
                        },
                    ]
                }
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
}
