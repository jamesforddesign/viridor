module.exports = [
    {
        title: {
            en: "Section 1",
            cy: "Section 1 welsh"
        },

        permalink: {
            en: "have-your-say/feedback-form/section-1",
            cy: "dweud-eich-dweud/ffurflen-adborth/section-1-welsh"
        },

        parent: {
            en: "have-your-say",
            cy: "dweud-eich-dweud"
        },

        type: "questions", // questions, contact

        description: {
            en: `<p>Lorem ipsum</p>`,
            cy: ``,
        },

        subSections: [
            {
                // Optional
                title: {
                    en: "",
                    cy: ""
                },

                // Optional
                description: {
                    en: "",
                    cy: ""
                },

                groups: [
                    {
                        // Optional
                        title: {
                            en: "",
                            cy: ""
                        },

                        // Optional
                        description: {
                            en: "",
                            cy: ""
                        },

                        questions: [
                            {
                                label: {
                                    en: "Question 1?",
                                    cy: ""
                                },
                                number: "1", // or name if contact section
                                type: "text" // text, radio, checkbox
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: {
            en: "Your details",
            cy: ""
        },

        permalink: {
            en: "have-your-say/feedback-form/your-details",
            cy: "dweud-eich-dweud/ffurflen-adborth/your-details"
        },

        parent: {
            en: "have-your-say",
            cy: "dweud-eich-dweud"
        },

        type: "contact",

        subSections: [
            {
                groups: [
                    {
                        questions: [
                            {
                                label: {
                                    en: "Full name",
                                    cy: ""
                                },
                                name: "first_name", // or name if contact section
                                type: "text" // text, radio, checkbox
                            },
                            {
                                label: {
                                    en: "Email",
                                    cy: ""
                                },
                                name: "email", // or name if contact section
                                type: "email", // text, radio, checkbox
                                required: true
                            },
                            {
                                label: {
                                    en: "Address",
                                    cy: ""
                                },
                                name: "address", // or name if contact section
                                type: "text" // text, radio, checkbox
                            },
                            {
                                label: {
                                    en: "Postcode",
                                    cy: ""
                                },
                                name: "postcode", // or name if contact section
                                type: "text" // text, radio, checkbox
                            }
                        ]
                    }
                ]
            }
        ],
    },

    // Do not remove these sections!
    {
        title: {
            en: "Review",
            cy: "Adolygiad"
        },

        permalink: {
            en: "have-your-say/feedback-form/review",
            cy: "dweud-eich-dweud/ffurflen-adborth/adolygiad"
        },

        parent: {
            en: "have-your-say",
            cy: "dweud-eich-dweud"
        },

        type: "review",
    },
    {
        title: {
            en: "Success",
            cy: "Llwyddiant"
        },

        permalink: {
            en: "have-your-say/feedback-form/success",
            cy: "dweud-eich-dweud/ffurflen-adborth/llwyddiant"
        },

        parent: {
            en: "have-your-say",
            cy: "dweud-eich-dweud"
        },

        type: "success",
    },
];