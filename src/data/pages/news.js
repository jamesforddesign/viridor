module.exports = {
    title: {
        en: "Latest news",
        cy: "Y newyddion diweddaraf",
    },

    navOrder: 5,

    permalink: {
        en: "news",
        cy: "newyddion"
    },

    parent: {
        en: "",
        cy: "",
    },

    blocks: [
        {
            type: "hero",
            title: {
                en: "Latest news",
                cy: "Y newyddion diweddaraf",
            },
        },
        {
            type: "breadcrumbs"
        },
        {
            type: "articles",
            bgColour: "white"
        },
        {
            type: "text",
            textColour: "white",
            bgColour: "primary",

            title: {
                en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit CY",
            },

            image: "/mountain-3.jpg",

            content: {
                en: `<p>Nunc quis tortor metus. Proin porta felis aliquam felis interdum molestie. Donec ante est, porttitor faucibus porta fringilla, efficitur in tortor. Nam felis lectus, dignissim vitae aliquet non, congue faucibus ante. Etiam tempor consectetur erat, nec varius libero blandit non. Aenean sed diam sem. Sed mi diam, interdum nec eros vel, ullamcorper congue nisl. Mauris laoreet auctor ipsum sed gravida. Proin iaculis nisl ut libero fringilla, vitae condimentum ligula pharetra. Donec ut accumsan ipsum.</p>`,
                cy: `<p>Nunc quis tortor metus. Proin porta felis aliquam felis interdum molestie. Donec ante est, porttitor faucibus porta fringilla, efficitur in tortor. Nam felis lectus, dignissim vitae aliquet non, congue faucibus ante. Etiam tempor consectetur erat, nec varius libero blandit non. Aenean sed diam sem. Sed mi diam, interdum nec eros vel, ullamcorper congue nisl. Mauris laoreet auctor ipsum sed gravida. Proin iaculis nisl ut libero fringilla, vitae condimentum ligula pharetra. Donec ut accumsan ipsum.</p>`,
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

                    bgColour: "secondary",
                },
                {
                    title: {
                        en: "External link",
                        cy: "CY external link",
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
        },
    ]
};