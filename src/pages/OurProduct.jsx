import React, { useEffect } from 'react'
import HeroBanner from "../components/comman/HeroBanner"
import our_Products from "../assets/images/product/our_product.png"
import OurProducts from '../components/ourProduct/OurProduct'
import ProductsCards from '../components/ourProduct/ProductsCards'
import OurMachine from '../components/about/OurMachine'
import WrokingProcessMachine from '../components/about/WrokingProcessMachine'
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'

function OurProduct() {
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
                <title>Products - Green Composte</title>
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
            <HeroBanner
                heroImage={our_Products}
                title='Our Products'
            />
            <OurProducts />
            <ProductsCards />
            <OurMachine />
            <WrokingProcessMachine />
        </React.Fragment>
    )
}

export default OurProduct