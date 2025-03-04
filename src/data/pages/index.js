const { description } = require("../global");

module.exports = {
    title: {
        en: "Home",
        cy: "Cartref",
    },

    socialImage: "/assets/images/home-2.webp",

    permalink: {
        en: "",
        cy: ""
    },

    parent: {
        en: "",
        cy: "",
    },

    blocks: [
        {
            type: "hero",
            variant: "square",
            title: {
                en: "Consultation on Viridor's carbon capture proposals open from Monday 3 to Sunday 30 March 2025.",
                cy: ""
            },
            subtitle: {
                en: "Viridor is holding a consultation on proposals to decarbonise the waste sector through the use of carbon capture at our Runcorn Energy Recovery Facility (ERF).",
                cy: ""
            },
            background: "/home-2.webp"
        },
        {
            type: "text",
            bgColour: "white",
            title: {
                en: "Who is Viridor?",
                cy: ""
            },
            content: {
                en: `
                    <h4 class="[ fw-normal text-grey-100 ]">Viridor is a leading resource recovery and recycling business that transforms non-recycled waste into energy.</h4>
                    <p>We’ve invested over <span class="fw-bold">£1.2 billion</span> in developing a network of advanced Energy Recovery Facilities (ERFs) across the UK and we deliver innovative ways to reduce, reuse, recycle or recover energy from the things that you sort into your bins every day. We’re an active recycler ourselves, and work with our local authority customers to meet recycling and waste management targets. You can take a tour of our virtual ERF <a class="fw-bold" href="https://www.viridor.co.uk/erf-virtual-tour/" target="_blank">here</a>. </p>    
                    
                    <div class="[ panel ] [ text-white ] [ bg-primary ][ mt-3 ]">
                        <h3 class="[ fw-normal text-white ]">Register to attend our webinar</h3>
                        <p>We're holding a webinar on our proposals for carbon capture at Runcorn at 6pm on Tuesday 18 March. </p>
                        <a href="https://us06web.zoom.us/webinar/register/WN_tRBO5L_aRl66jftE4AUrJA" target="_blank" rel="noreferrer"class="[ btn btn-white rounded-0 ] [ d-flex align-items-center justify-content-center gap-2 ]">
                            <span class="text-primary">Register here</span>
                        </a>
                    </div> 
                    `,
                cy: ``,
            },
            contentInvert: {
                en: `
                    <div class="[ panel ] [ bg-secondary ] [ text-white ]">
                        <p class="fw-bold">During 2023/24, Viridor contributed nearly £1 million to the Halton Borough Council Environment Fund which supports community-focused projects in the local area. Recently, this has included a £650,000 donation to fund a new community café in Pickerings Pasture. </p>
                        <p>Local organisations have also benefited from Viridor’s We Share Community Fund, which is our corporate fund run by our people who choose to support well deserving causes in areas surrounding our ERFs. In Runcorn, these include donations to Halton Haven Hospice and Weston Point Scout Group. We are also ongoing sponsors of Runcorn FC.</p>
                        <img class="mt-3" src="/assets/images/antrobus-st-marks.jpg" alt="Antrobus St Marks image">
                    </div>
                `,
            cy: ``,
            }
        },
        {
            type: "text",
            bgColour: "grey-25",
            opacity: "10",
            invert: true,
            title: {
                en: "Story so far",
                cy: ""
            },
            content: {
                en: `
                    <h4 class="[ fw-normal text-grey-100 ]">Viridor has been operating an ERF at Runcorn since 2014, and now treats approximately 1 million tonnes of non-recycled waste each year, generating enough energy to power the equivalent of 211,000 homes.  </h4>
                    <p>In May 2021, we announced our five-step action plan to achieve net zero emissions by 2040. Capturing the carbon produced by facilities such as our Runcorn ERF is a key part of this ambition. You can read more about our ambitions for carbon capture at Runcorn <a class="fw-bold" href="/assets/images/pdf/carbon-capture-a-waste-opportunity.pdf" target="_blank">here</a>.</p>
                    <p>In March 2023, the UK Government announced that our proposals for carbon capture in Runcorn had been shortlisted for the final stage in its <a class="fw-bold"  href="https://www.gov.uk/government/publications/cluster-sequencing-phase-2-eligible-projects-power-ccus-hydrogen-and-icc/cluster-sequencing-phase-2-shortlisted-projects-power-ccus-hydrogen-and-icc-august-2022" target="_blank">industrial carbon capture (ICC) sequencing process</a> - a centralised plan for choosing locations and projects to capture and store carbon in the UK.</p>
                    <p>As one of the first carbon capture projects on an ERF facility in the world, we agreed a statement of principles with the UK Government’s Department for Energy Security and Net Zero (DESNZ) in March 2024. You can read more on this decision <a class="fw-bold" href="https://www.viridor.co.uk/news-and-insights/viridor-runcorn-ccs-project-to-advance-to-next-stage/" target="_blank">here</a>.</p>
                    `,
                cy: ``,
            },
            image: "/home-1.webp"
        },
        {
            type: "text",
            bgColour: "white",
            title: {
                en: "Background",
                cy: ""
            },
            content: {
                en: `
                    <h4 class="[ fw-normal text-grey-100 ]">Viridor is progressing the UK’s largest opportunity to decarbonise the waste sector, through the use of carbon capture at its Runcorn ERF facility, with CO<sub>2</sub> being captured and safely transported through the HyNet pipeline and then stored permanently, deep underneath Liverpool Bay.</h4>
                    <p>Viridor Runcorn will become one of the first ERFs in the world to introduce carbon capture – and capture around 900,000 tonnes of CO<sub>2</sub> each year. It will also see us create net zero power and heat from our facility, helping to decarbonise industry in the North West and contributing to the government’s target of reaching net zero by 2050.</p>
                    <p>This consultation invites you to find out more and provide feedback, ahead of a planning application being submitted to Halton Borough Council.</p>
                    `,
                cy: ``,
            },

            contentInvert: {
                en: `
                    <div class="[ panel ] [ bg-tertiary ] [ text-white ]">
                        <h4 class="text-white">HyNet</h4>
                        <p>The HyNet pipeline is a nationally significant infrastructure project that plans to take captured carbon dioxide from across our region and store it under the sea in Liverpool Bay. Our proposals for carbon capture at Runcorn would connect to the Runcorn Spur Pipeline and wider HyNet network, which is being developed by Eni. </p>
                        <p>You can find out more by visiting the HyNet website, <a class="text-white fw-bold" href="https://hynethub.co.uk/index.php?contentid=982" target="_blank">here</a>.</p>
                    </div>
                    `,
            cy: ``,
            },
        },
        {
            type: "text",
            bgColour: "grey-25",
            opacity: "10",
            title: {
                en: "Why do we need carbon capture?",
                cy: ""
            },
            content: {
                en: `
                    <h4 class="[ fw-normal text-grey-100 ]">Human activity has been the main driver of climate change since the 1800s. The production of greenhouse gases (including CO<sub>2</sub>) is the key reason why the earth is warming faster than ever before, and extreme weather events are becoming more common.</h4>
                    <p>Waste is a major contributor to greenhouse gas emissions and even with improvements in recycling, the average person still throws away around 500kg of non-recycled waste each year. This is the weight of a small car! </p>
                    <p>However, our industry is well suited to capturing CO<sub>2</sub> and it could have a big impact. For example, in Runcorn alone each year, we will capture carbon equivalent to the emissions from 3000 commercial flights between London and New York!</p>
                    <p>This project will make our site climate positive by producing negative emissions. This is where the total carbon we capture is more than the total fossil (man-made) carbon we produce. We will be capturing natural carbon so we’ll actually be removing carbon from the atmosphere and in doing so we’ll be helping this region to be at the forefront of efforts to reduce the UK’s carbon emissions and reach net zero targets. You can find out more about negative emissions from the Coalition for Negative Emissions, <a class="fw-bold" href="https://coalitionfornegativeemissions.org/" target="_blank">here</a>. </p>
                    `,
                cy: ``,
            },

            contentInvert: {
                en: `
                    <div class="[ panel panel--no-padding ]  [ text-white ]">
                        <h3 class="[ panel__heading bg-primary ]">How does carbon capture work?</h3>
                        <div class="[ panel__description text-black bg-primary-light ]">
                            <ol>
                                <li>Flue gas is diverted from the existing ERF stack into the proposed carbon capture infrastructure.</li>
                                <li>The flue gas is then passed through a piece of machinery called a scrubber which cleans it and cools it down. </li>
                                <li>The gas then moves to the absorber column, where the CO<sub>2</sub> is absorbed from the flue gas (while cold) by a CO<sub>2</sub> solvent (e.g. amine). The flue gas (minus the CO<sub>2</sub>) is vented through a stack into the atmosphere after being re-heated. </li>
                                <li>The CO<sub>2</sub> rich solvent is then warmed up through a heat exchanger. A reclaimer is also used to continuously clean the solvent to keep it effective at removing as much CO<sub>2</sub> as possible. </li>
                                <li>In a stripper, the solvent is further heated until it releases the CO<sub>2</sub> as a pure gaseous stream. </li>
                                <li>The CO<sub>2</sub> is then passed into a compressor, which increases the pressure to pump it away from site. Before entering the transport system, the CO<sub>2</sub> is conditioned / treated to ensure it will not corrode the downstream system. </li>
                                <li>The CO<sub>2</sub> captured at Viridor Runcorn is then handed over to the transport and storage operator as part of the HyNet Network, which would take the CO<sub>2</sub> for permanent sequestration below impermeable rock.</li>
                            </ol>
                        </div>
                    </div>   
                    `,
            cy: ``,
            },
        },
        {
            type: "text",
            bgColour: "white",
            title: {
                en: "",
                cy: ""
            },
            content: {
                en: `
                    <h4 class="fw-normal">You can find out more about carbon capture from the <a class="fw-bold" href="https://www.ccsassociation.org/" target="_blank">CCSA</a> - the lead European association for carbon capture, utilisation and storage (CCUS).</h4>             
                    `,
                cy: ``,
            },
            image: "/infographic.webp",
            zoomable: true,
            size: 3,

        }
        
    ]
};
