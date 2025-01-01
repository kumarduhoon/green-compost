import React from 'react'
import "./HomeAbout.scss"
import greenComposeMachineOne from "../../../assets/images/home/green_compose_machine_one.avif"
function HomeAbout() {
    return (
        <React.Fragment>
            <section className="about-green-compost">
                <div className="content-container">
                    <div className="text-content">
                        <h2 className='about-green-compost'>About Green Compost</h2>
                        <p className='about-text'>
                            The idea of effectively managing waste has been practiced from time
                            immemorial, though, has lost participation from people owing to it
                            being a painstaking process. Your organic house waste shall no
                            longer turn into unhygienic, foul-smelling, hazardous matter
                            polluting the MOTHER EARTH. TMK has come up with a unique solution
                            by formulating an organic composting machine that enables users to
                            convert organic waste into extremely effective bio-fertilizers and
                            planting media. TMK is a waste management social enterprise that is
                            moving the organic waste sector to models that are simultaneously,
                            environmentally, and financially sustainable. We offer professional
                            waste management and processing services to household community
                            composting for Residential apartments and Institutional clients
                            like Schools, Colleges, Offices, Hotels, Restaurants, Canteens,
                            Factories, etc.
                        </p>
                        <button className="download-button">Download Brochure</button>
                    </div>
                    <div className="image-container">
                        <img
                            src={greenComposeMachineOne}
                            alt="Sustainable Environment"
                            className='about-green-comost-image'
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomeAbout