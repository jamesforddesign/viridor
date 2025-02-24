module.exports = {
    title: {
        en: "Consultation",
        cy: "",
    },

    navOrder: 1,

    permalink: {
        en: "have-your-say/consultation",
        cy: "dweud-eich-dweud/rhoi-eich-adborth"
    },

    parent: {
        en: "have-your-say",
        cy: "dweud-eich-dweud"
    },

    blocks: [
        {
            type: "text",
            bgColour: "white",
            opacity: "10",            
            title: {
                en: "What we’re consulting on",
                cy: ""
            },
            content: {
                en: `
                    <h4 class="[ fw-normal text-grey-100 ]">The Town and Country Planning Act (1990) Process</h4>
                    <p>In line with the Town and Country Planning Act (1990), our planning application will be decided by Halton Borough Council as the local planning authority. Once submitted, the planning officers at Halton Borough Council will run a separate consultation on our application before making a recommendation to the planning committee as to whether it should be approved. </p>
                    `,
                cy: ``,
            },
            contentInvert: {
                en: `
                    <div class="[ panel ] [ bg-secondary ] [ text-white ]">
                        <h3 class="[ fw-normal text-white ]">This consultation</h3>
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
                    <p>As part of this consultation, we are seeking feedback on our plans for carbon capture at Runcorn. You can submit your feedback by:</p>
                    <p>Email: <a class="fw-bold"  href="mailto:info@runcornccs.com">info@runcornccs.com</a></p>
                    <p>Freepost: Freepost VIRIDOR CCS (it’s free and you don’t need a stamp)</p>
                    <p>On this website: using the feedback boxes on each page. </p>
                    <p>At events: there will be feedback postcards available at our in-person events which can be completed and handed to a member of the team or taken away and posted back to us, free of charge. </p>
                    `,
                cy: ``,
            },
        }
    ]
};