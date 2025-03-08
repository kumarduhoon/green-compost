import React, { Suspense, lazy, useEffect } from 'react'
import { motion } from "framer-motion";
import heroImage from "../assets/images/about/about_hero.png"
const HeroBanner = lazy(() => import("../components/comman/HeroBanner"))
const AboutUs = lazy(() => import("../components/about/About"))
const IndustryApplication = lazy(() => import("../components/about/IndustryApplication"))
const VisionMission = lazy(() => import("../components/about/VisionMission"))
const WorkProcess = lazy(() => import("../components/about/WorkProcess"))
const OurMachine = lazy(() => import("../components/about/OurMachine"))
const WrokingProcessMachine = lazy(() => import("../components/about/WrokingProcessMachine"))
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>About Green Composte (green compost and green compost machine) | Our Mission & Vision</title>
                <meta name="description"
                    content="Green Composte  (Green Compost) provides innovative recycling solutions that transform green waste into organic compost and organic composte using advanced, environmentally friendly technology." />
                <meta name="keywords"
                    content="green compost, green composte, organic compost,organic compost machine, organic composte, organic waste recycling, sustainable composting, eco-friendly solutions, waste management, green technology, environmental solutions green compost machine" />
                <meta name="author" content="Green Composte (Green Compost), Green Compost Machine" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="format-detection" content="telephone=no" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Green Composte (Green Compost) - Sustainable & Organic Recycling Solutions" />
                <meta property="og:description"
                    content="Discover Green Composte (also known as Green Compost and Green Compost Machine) and our innovative technology that transforms green waste into organic compost and organic composte for a greener planet." />
                <meta property="og:url" content="https://www.greencomposte.com/" />
                <meta property="og:image" content="https://www.greencomposte.com/images/og-image.jpg" />
                <meta property="og:site_name" content="Green Composte (Green Compost), Green Compost Machine" />
                <meta property="og:locale" content="en_US" />
            </Helmet>
            <Suspense fallback={""}>
                <HeroBanner
                    heroImage={heroImage}
                    title='About Us'
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <AboutUs />
                </motion.div>

                <IndustryApplication />
                <VisionMission />
                <WorkProcess />
                <OurMachine />
                <WrokingProcessMachine />
            </Suspense>
        </React.Fragment>
    )
}

export default About