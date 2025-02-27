import React, { useEffect } from 'react'
import HomeBasicKnowledge from "../components/home/homeBasicKnowledge/HomeBasicKnowledge"
import HomeAbout from "../components/home/homeAbout/HomeAbout"
import HomeMisson from "../components/home/homeMisson/HomeMisson"
import HomeMachine from "../components/home/homeMachine/HomeMachine"
import HomeProcess from "../components/home/homeProcess/HomeProcess"
import HomeProduct from "../components/home/homeProducts/HomeProduct"
import HomeSocialLinks from "../components/home/homeSocialLink/HomeSocialLinks"
import AnimatedSection from '../Util/AnimatedSection'
import HomeHeroImg from "../assets/images/home/home_banner_new.png";
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";
import HomeRecycled from '../components/home/homeRecycled/HomeRecycled'
import HeroBanner from "../components/comman/HeroBanner"
function Home() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Green Composte (Green Compost) | Sustainable & Organic Recycling Solutions</title>
                <meta name="description"
                    content="Green Composte (Green Compost) provides innovative recycling solutions that transform green waste into organic compost and organic composte using advanced, environmentally friendly technology." />
                <meta name="keywords"
                    content="green compost, green composte, organic compost, organic composte, organic waste recycling, sustainable composting, eco-friendly solutions, waste management, green technology, environmental solutions" />
                <meta name="author" content="Green Composte" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="format-detection" content="telephone=no" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Green Composte (Green Compost) - Sustainable & Organic Recycling Solutions" />
                <meta property="og:description"
                    content="Discover Green Composte (also known as Green Compost) and our innovative technology that transforms green waste into organic compost and organic composte for a greener planet." />
                <meta property="og:url" content="https://www.greencomposte.com/" />
                <meta property="og:image" content="https://www.greencomposte.com/images/og-image.jpg" />
                <meta property="og:site_name" content="Green Composte" />
                <meta property="og:locale" content="en_US" />
            </Helmet>
            <HeroBanner
                heroImage={HomeHeroImg}
                title='24-HOUR COMPOSTING MACHINE'
                description=' GREEN COMPOST develops innovative food equipment solutions for home, commercial, and industrial kitchens by turning waste food into compost in just 24 hours.'
                buttonLink='/about'
            />
            <AnimatedSection>
                <HomeBasicKnowledge />
            </AnimatedSection>
            <AnimatedSection>
                <HomeAbout />
            </AnimatedSection>
            <AnimatedSection>
                <HomeMisson />
            </AnimatedSection>
            <AnimatedSection>
                <HomeMachine />
            </AnimatedSection>
            <AnimatedSection>
                <HomeProcess />
            </AnimatedSection>
            <AnimatedSection>
                <HomeProduct />
            </AnimatedSection>
            <AnimatedSection>
                <HomeRecycled />
            </AnimatedSection>
            <AnimatedSection>
                <HomeSocialLinks />
            </AnimatedSection>
        </React.Fragment>
    )
}

export default Home