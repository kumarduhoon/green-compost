import React from 'react'
import './About.scss'

function AboutUs() {
    return (
        <React.Fragment>
            <div className='about-us-con'>
                <h1 className='about-us-con__head'>ABOUT US</h1>
                <div className='about-us-con__text-con'>
                    <p className='about-us-con__text'>Green Composte is a technology company that develops eco-friendly and innovative systems that convert food and organic waste into useful products like high-efficiency compost fertilizer, pet food, and animal feed within 12-24 hours. This transformation results in up to a 90% reduction in waste, with the process being odorless and consuming low energy. This helps our customers not only reduce their waste but also significantly lower their carbon footprint.
                    </p>
                    <p>HSS machines, produced in Turkey, are offered to customers through central sales, service offices, and experience centers located in both Turkey and the United States. These centers allow users to experience our systems and find the most suitable solutions for their needs. As of 2025, HSS will begin production in the United States, aiming to increase local production capacity and provide faster service to the market.</p>
                    <p>HSS provides integrated waste management solutions not only for individual businesses and the agricultural sector but also for municipalities, power plants, airports, islands, cruise ships, and large farms. These projects contribute to sustainable development goals, allowing large facilities to optimize their waste management. Thanks to these industrial facilities, large volumes of organic waste are recycled in an environmentally responsible manner, improving efficiency and solving the waste problem.</p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default AboutUs