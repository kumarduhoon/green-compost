import React, { useEffect } from 'react'
import "./OurMachine.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import headerImage from "../../assets/images/about/work-process-head.png"
import machineOne from "../../assets/images/about/machineOne.png"
import machineTwo from '../../assets/images/about/machineTwo.png'
import machineThree from "../../assets/images/about/machineThree.png"
import machineFour from "../../assets/images//about/machineFour.png"
import bigMachine from "../../assets/images/about/bigMachine.png"


function OurMachine() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <React.Fragment>
            <div className='our-machine-one'>
                <div
                    data-aos="fade-zoom-in"
                    className='our-machine-one__header-img-con'>
                    <img src={headerImage} alt="Image Alt" loading="lazy" className='our-machine-one__img' />
                    <h1 className='our-machine-one__head'>
                        Our Machine
                    </h1>
                </div>
                <div data-aos="fade-zoom-in" className='our-machine-one__content-con'>
                    <div className='our-machine-one__content'>
                        <p className='our-machine-one__content_text'>GREEN COMPOSTE is committed to helping the globe achieve zero food waste by providing automatic organic food waste composting solutions and systems for all kinds of businesses and homes.</p>
                        <p className='our-machine-one__content__text-two'>Our goal is to help achieve sustainability, allowing the food waste from the farms, restaurants, hotels, food processing plants, etc. to go back to the farms as fertilizer for future food through our food recycler machines . </p>
                    </div>
                    <div className='our-machine-one__content-con__img-con'><img src={bigMachine} alt="Image Alt" loading="lazy" className='our-machine-one__content-con__img-con_img' /></div>
                </div>
                <div data-aos="fade-zoom-in" className='our-machine-one__img-cons'>
                    <img src={machineFour} alt="Image Alt" loading="lazy" className='our-machine-one__img-cons__img' />
                    <img src={machineThree} alt="Image Alt" loading="lazy" className='our-machine-one__img-cons__img' />
                    <img src={machineTwo} alt="Image Alt" loading="lazy" className='our-machine-one__img-cons__img' />
                    <img src={machineOne} alt="Image Alt" loading="lazy" className='our-machine-one__img-cons__img' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurMachine