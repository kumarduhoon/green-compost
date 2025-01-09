import React, { useEffect } from 'react'
import "./HeroBanner.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import bottomImage from '../../assets/images/home/banner_bottom.webp'
import { Link } from 'react-router-dom';



function HeroBanner({ heroImage, buttonLink, title, description }) {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
        });
    }, [])
    return (
        <React.Fragment>
            <div
                data-aos="fade-zoom-in"
                className='hero-img-con'>
                <img src={heroImage} alt="Image Alt" loading="lazy" className='hero-img-con__img' />
                {title && <div className="hero-content">
                    <h1 className="hero-title">{title}</h1>
                    {description && <p className="hero-description">{description}</p>}
                    {buttonLink && <Link to={buttonLink}>
                        <button className="hero-button">Learn More</button>
                    </Link>}
                </div>}
                <div className='hero-img-con__bottom'>
                    <img src={bottomImage} alt="Image Alt" loading="lazy" className='hero-img-con__bottom__img' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroBanner