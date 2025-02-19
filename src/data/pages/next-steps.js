module.exports = {
    title: {
        en: "Next steps",
        cy: "Next steps",
    },

    navOrder: 3,

    socialImage: "https://placehold.co/700x400",

    permalink: {
        en: "next-steps",
        cy: "next-steps-cy"
    },

    parent: {
        en: "",
        cy: "",
    },

    blocks: [
        {
            type: "hero",
            variant: "rounded", // rounded, square, block, gradient

            title: {
                en: "Next Steps",
                cy: "",
            },

            background: "/placeholder.jpg"
        },
        {
            type: "timeline",
        
            // Optional
            title: {
                en: "Next Steps",
                cy: "",
            },
        
            content: [
                {
                    title: {
                        en: "Consultation – Spring 2025 [WE ARE HERE]",
                        cy: ""
                    },
                    highlight: true, // Optional
                    reverse: true, // 
                    description: {
                        en: "As part of the application process, we are conducting a public consultation with relevant stakeholders and members of the local community to inform them about, and collect feedback on, our proposals for carbon capture at Runcorn. ",
                        cy: ""
                    }
                },
                {
                    title: {
                        en: "Application – Summer 2025 ",
                        cy: ""
                    },
                    reverse: false, // 
                    description: {
                        en: "We will be submitting our planning application to Halton Borough Council, as the relevant local planning authority, later this year. ",
                        cy: ""
                    }
                },
                {
                    title: {
                        en: "Decision – Early 2026",
                        cy: ""
                    },
                    reverse: true, // 
                    description: {
                        en: "We anticipate a decision on our application from Halton Borough Council at the beginning of 2026. ",
                        cy: ""
                    }
                },
                {
                    title: {
                        en: "Construction – Spring 2027",
                        cy: ""
                    },
                    reverse: false, // 
                    description: {
                        en: "If our application is approved, we hope to begin construction of our carbon capture facility in April 2026.",
                        cy: ""
                    }
                },
                {
                    title: {
                        en: "Operation – Winter 2029",
                        cy: ""
                    },
                    reverse: true, // 
                    description: {
                        en: "We anticipate being able to start capturing carbon at Runcorn at the end of 2029.",
                        cy: ""
                    }
                }
        
                // ...
            ]
        }
        
    ]
};
