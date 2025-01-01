import React, { useEffect } from 'react'
import HomeHero from "../components/home/homeHero/HomeHero"
import HomeBasicKnowledge from "../components/home/homeBasicKnowledge/HomeBasicKnowledge"
import HomeAbout from "../components/home/homeAbout/HomeAbout"
import HomeMisson from "../components/home/homeMisson/HomeMisson"
import HomeMachine from "../components/home/homeMachine/HomeMachine"
import HomeProcess from "../components/home/homeProcess/HomeProcess"
import HomeProduct from "../components/home/homeProducts/HomeProduct"
import HomeSocialLinks from "../components/home/homeSocialLink/HomeSocialLinks"
import AnimatedSection from '../Util/AnimatedSection'
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

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
                <title>Green Compost</title>
                <meta name="description" content="Your website's description here, optimized for SEO. Keep it under 160 characters." />
                <meta name="keywords" content="your, keywords, here, separated, by, commas" />
                <meta name="author" content="Green Compost" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home | Green Compost" />
                <meta property="og:description" content="A brief description of your homepage for social sharing." />
                <meta property="og:url" content="https://www.yourwebsite.com/" />
                <meta property="og:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Home | Green Compost" />
                <meta name="twitter:description" content="A brief description of your homepage for Twitter sharing." />
                <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
                <meta name="twitter:site" content="@YourTwitterHandle" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/path-to-windows-tile-image.png" />
            </Helmet>
            <HomeHero />
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
                <HomeSocialLinks />
            </AnimatedSection>
        </React.Fragment>
    )
}

export default Home