import React, { useEffect } from 'react'
import "./OurProduct.scss"
import AOS from "aos";
import "aos/dist/aos.css";
function OurProducts() {
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
                className='our-product-con'>
                <h1 className='our-product-con__head'>OUR PRODUCTS</h1>
                <div className='our-product-con__text'>Green Composte (green compost),s innovative machine decomposes food waste into rich compost within just 24 hours. Our solution transforms waste into a sustainable resource, promoting a cleaner, greener environment effortlessly.</div>
            </div>
        </React.Fragment>
    )
}

export default OurProducts