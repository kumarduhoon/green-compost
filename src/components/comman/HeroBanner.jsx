import React, { useEffect } from 'react'
import "./HeroBanner.scss"
import AOS from "aos";
import "aos/dist/aos.css";



function HeroBanner({ heroImage }) {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <React.Fragment>
            <div
                data-aos="fade-zoom-in"
                className='hero-img-con'>
                <img src={heroImage} alt="Image Alt" loading="lazy" className='hero-img-con__img' />
            </div>
        </React.Fragment>
    )
}

export default HeroBanner