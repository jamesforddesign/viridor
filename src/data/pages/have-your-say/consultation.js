module.exports = {
    title: {
        en: "Consultation",
        cy: "",
    },

    navOrder: 1,

    permalink: {
        en: "have-your-say/consultation",
        cy: "have-your-say/consultation"
    },

    parent: {
        en: "have-your-say",
        cy: ""
    },

    blocks: [
        {
            type: "hero",
            variant: "square", // rounded, square, block, gradient

            title: {
                en: "What we’re consulting on",
                cy: "",
            },

        },
        {
            type: "text",
            bgColour: "white",
            content: {
                en: `
                    <div class="[ panel ] [ bg-grey-100 ] [ text-white ]">
                        <h3 class="[ fw-normal ]">The Town and Country Planning Act (1990) Process</h3>
                        <p>In line with the Town and Country Planning Act (1990), our planning application will be decided by Halton Borough Council as the local planning authority. Once submitted, the planning officers at Halton Borough Council will run a separate consultation on our application before making a recommendation to the planning committee as to whether it should be approved. </p>
                    </div>
                    `,
                cy: ``,
            },
            contentInvert: {
                en: `
                    <div class="[ panel ] [ bg-secondary ] [ text-white ]">
                        <h3 class="[ fw-normal ]">This consultation</h3>
                        <p>As this project develops, we’re keen to hear your views on our proposal for carbon capture at Runcorn. You can find more information on our plans on the <a class="text-white fw-bold" href="/our-proposals">our proposals</a> page of this website.  </p>
                        <p>Please note, this consultation is on our plans for carbon capture at Runcorn and not on the operations of the existing ERF facility. As such, these proposals will not impact or change the existing operations of our ERF.</p>  
                    </div>                
                    `,
            cy: ``,
            }
        },


        {
            type: "table",
            bgColour: "primary-light",
            text: "black",
        
            // Optional
            title: {
                en: "Consultation events",
                cy: "",
            },
        
            columns: [
                // Set number for columns
                {
                    
                    title: {
                        en: `Venue`,
                        cy: ``
                    },
                    width: "33.3%"
                },
                {
                    title: {
                        en: `Date`,
                        cy: ``
                    },                    
                    width: "33.3%"
                },
                {
                    title: {
                        en: `Time`,
                        cy: ``
                    },
                    width: "33.3%"
                }
        
                // ...
            ],
        
            rows: [
                // Set number of rows
                [
                    {
                        en: `The Old Police Station, Mersey Road, Runcorn, WA7 1DF`,
                        cy: ``
                    },
                    {
                        en: `Friday 14 March `,
                        cy: ``
                    },
                    {
                        en: `3pm – 7pm `,
                        cy: ``
                    },
                ],
                [
                    {
                        en: `Runcorn Shopping City, WA7 2EU`,
                        cy: ``
                    },
                    {
                        en: `Saturday 15 March  `,
                        cy: ``
                    },
                    {
                        en: `9am – 12pm `,
                        cy: ``
                    },
                ]

            ],
            content: {
                en: `
                    <p class="text-black">We will also be holding a webinar at 6pm on Tuesday 18 March. You can register <a class="fw-bold" href="#" target="_blank">here</a>.</p>
                    `,
                cy: ``,
            },
        },
        {
            type: "text",
            bgColour: "grey-25",
            opacity: "10",
            title: {
                en: "How to provide feedback",
                cy: ""
            },
            content: {
                en: `
                    <h4 class="[ fw-normal text-grey-100 ]">As part of this consultation, we are seeking feedback on our plans for carbon capture at Runcorn.</h4> 
                    <p>You can submit your feedback by:</p>
                    <p class="fw-bold">Email: <a href="mailto:info@runcornccs.com">info@runcornccs.com</a></p>
                    <p class="fw-bold">Freepost: <span class="[ text-primary ]">Freepost VIRIDOR CCS (it’s free and you don’t need a stamp)</span></p>
                    <p><span class="[ fw-bold ]">On this website:</span> using the feedback boxes on each page. </p>
                    <p><span class="[ fw-bold ]">At events:</span> there will be feedback postcards available at our in-person events which can be completed and handed to a member of the team or taken away and posted back to us, free of charge. </p>
                    `,
                cy: ``,
            },
        }
    ]
};