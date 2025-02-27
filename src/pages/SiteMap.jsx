import React, { useEffect } from 'react'
import HeroBanner from "../components/comman/HeroBanner"
import site_maps from "../assets/images/product/site_map.png"
import OurMachine from '../components/about/OurMachine'
import WrokingProcessMachine from '../components/about/WrokingProcessMachine'
import ReactUsMap from '../components/siteMap/ReactUsMap'
import ReachUsForm from '../components/siteMap/ReachUsForm'
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'

function SiteMap() {
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
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>Site Map - Green Composte| Organic Compost Solutions</title>
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
                heroImage={site_maps}
                title='Site Map'
            />
            <ReactUsMap />
            <ReachUsForm />
            <OurMachine />
            <WrokingProcessMachine />
        </React.Fragment>
    )
}

export default SiteMap