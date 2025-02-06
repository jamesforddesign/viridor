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