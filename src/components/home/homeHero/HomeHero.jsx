import React from 'react';
import Slider from 'react-slick';
import "./HomeHero.scss";
import HomeHeroOne from "../../../assets/images/home/home_hero_one.png";
import HomeHeroTwo from "../../../assets/images/home/home_hero_two.png";
import HomeHeroThree from "../../../assets/images/home/home_hero_three.png";
import { fadeIn } from '../../../Util/variants.js'
import { motion } from 'framer-motion'

function HomeHero() {
    const settings = {
        dots: true,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const bannerImages = [
        { id: 1, url: HomeHeroOne, head: "CREATING WEALTH FROM WASTE", text: "Following effective waste management practices can provide subsequent generations a more robust economy, a fairer and more inclusive society and a cleaner environment.", btnURL: "" },
        { id: 2, url: HomeHeroTwo, head: "24-HOUR COMPOSTING MACHINE", text: "GREEN COMPOSTE develops innovative food equipment solutions for home, commercial, and industrial kitchens by turning waste food into compost in just 24 hours.", btnURL: "" },
        { id: 3, url: HomeHeroThree, head: "24-HOUR COMPOSTING MACHINE", text: "GREEN COMPOSTE develops innovative food equipment solutions for home, commercial, and industrial kitchens by turning waste food into compost in just 24 hours.", btnURL: "" },
    ];

    return (
        <div className="hero-slider">
            <Slider {...settings} className="hero-slider__main-slider-con">
                {bannerImages.map((image) => (
                    <div key={image.id} className="hero-slider__slide">
                        <img src={image.url} alt={`Slide ${image.id}`} className="hero-slider__banner-image" />
                        <div className="hero-slider__text-container">
                            <motion.h1
                                variants={fadeIn('down', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className="hero-slider__text-container__head">{image.head}</motion.h1>
                            <motion.p
                                variants={fadeIn('up', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className="hero-slider__text-container__text">{image.text}</motion.p >
                            <motion.button
                                variants={fadeIn('up', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className="hero-slider__text-container__slider-btn">Learn More</motion.button >
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeHero;
