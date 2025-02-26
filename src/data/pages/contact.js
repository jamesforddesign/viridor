module.exports = {
    title: {
        en: "Contact us",
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
            variant: "square", // rounded, square, block, gradient

            title: {
                en: "Contact us",
                cy: "",
            },
            background: "/contact-us-hero.webp",

        },
        {
            type: "text",
            title: {
                en: "",
                cy: ""
            },
            content: {
                en: `
                    <p>If you have any questions on our plans for carbon capture at Runcorn, you can get in touch with the project team by: </p>
                    <p>Freephone: <a class="fw-bold" href="tel:0800 860 6264">0800 860 6264</a></p>
                    <p>Email: <a class="fw-bold" href="mailto:info@runcornccs.com">info@runcornccs.com</a></p>
                    <p>Freepost: <span class="fw-bold text-primary">Freepost VIRIDOR CCS (it’s free and you don’t need a stamp)</span></p>
                    `,
                cy: ``,
            },
        },

    ]
};