import React from 'react'
import HeroBanner from '../components/comman/HeroBanner'
import contact_us from '../assets/images/product/contact_us.png'
import ReactUsMap from '../components/siteMap/ReactUsMap'
import ReachUsForm from '../components/siteMap/ReachUsForm'
function ContactUs() {
    return (
        <React.Fragment>
            <HeroBanner
                heroImage={contact_us}
            />
            <ReactUsMap />
            <ReachUsForm />
        </React.Fragment>
    )
}

export default ContactUs