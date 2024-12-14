import React from 'react'
import HeroBanner from "../components/comman/HeroBanner"
import site_maps from "../assets/images/product/site_map.png"
import OurMachine from '../components/about/OurMachine'
import WrokingProcessMachine from '../components/about/WrokingProcessMachine'
import ReactUsMap from '../components/siteMap/ReactUsMap'
import ReachUsForm from '../components/siteMap/ReachUsForm'

function SiteMap() {
    return (
        <React.Fragment>
            <HeroBanner
                heroImage={site_maps}
            />
            <ReactUsMap />
            <ReachUsForm />
            <OurMachine />
            <WrokingProcessMachine />
        </React.Fragment>
    )
}

export default SiteMap