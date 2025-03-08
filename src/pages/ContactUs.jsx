import React, { useEffect } from 'react'
import HeroBanner from '../components/comman/HeroBanner'
import contact_us from '../assets/images/product/contact_us.png'
import ReactUsMap from '../components/siteMap/ReactUsMap'
import ReachUsForm from '../components/siteMap/ReachUsForm'
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'

function ContactUs() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Contact Green Composte (green compost and green compost machine) | Get in Touch</title>
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
            <HeroBanner
                heroImage={contact_us}
                title='Contact Us'
            />
            <ReactUsMap />
            <ReachUsForm />
        </React.Fragment>
    )
}

export default ContactUs