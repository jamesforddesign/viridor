module.exports = {
    title: {
        en: "Contact",
        cy: "Cyswllt"
    },

    navOrder: 4,

    permalink: {
        en: "contact",
        cy: "cyswllt"
    },

    parent: {
        en: "",
        cy: ""
    },

    blocks: [
        {
            type: "hero",
            variant: "rounded", // rounded, square, block, gradient

            title: {
                en: "Our proposals",
                cy: "",
            },

            background: "/placeholder.jpg"
        },
        {
            type: "text",
            textColour: "secondary",
            bgColour: "tertiary",
            title: {
                en: "Supporting the local economy",
                cy: ""
            },
            content: {
                en: `
                    <p>If you have any questions on our plans for carbon capture at Runcorn, you can get in touch with the project team by: </p>
                    <p>Freephone: 0800 860 6264</p>
                    <p>Email: info@runcornccs.com</p>
                    <p>Freepost: Freepost VIRIDOR CCS (it’s free and you don’t need a stamp)</p>
                    `,
                cy: ``,
            },
            image: "/placeholder.jpg"
        },

    ]
};