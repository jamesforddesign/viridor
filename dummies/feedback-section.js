{
    title: {
        en: "",
        cy: ""
    },

    permalink: {
        en: "",
        cy: ""
    },

    parent: {
        en: "",
        cy: ""
    },

    type: "", // questions, contact

    description: {
        en: ``,
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
                                en: "",
                                cy: "",
                            },

                            number: "", // or name if contact section

                            type: "", // text, radio, checkbox

                            // For radio or checkbox only
                            options: [
                                {
                                    en: "",
                                    cy: "",
                                },

                                // ...
                            ],

                            additionalClasses: "",

                            additionalQuestions: [
                                {
                                    label: {
                                        en: "",
                                        cy: "",
                                    },

                                    type: "text",

                                    number: "",

                                    placeholder: {
                                        en: "",
                                        cy: ""
                                    },

                                    additionalClasses: "",
                                },
                            ]
                        },

                        // ...
                    ]
                },

                // ...
            ]
        },

        // ...
    ]
},