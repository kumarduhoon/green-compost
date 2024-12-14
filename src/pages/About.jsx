import React, { Suspense, lazy } from 'react'
import { motion } from "framer-motion";
import heroImage from "../assets/images/about/about_hero.png"
const HeroBanner = lazy(() => import("../components/comman/HeroBanner"))
const AboutUs = lazy(() => import("../components/about/About"))
const IndustryApplication = lazy(() => import("../components/about/IndustryApplication"))
const VisionMission = lazy(() => import("../components/about/VisionMission"))
const WorkProcess = lazy(() => import("../components/about/WorkProcess"))
const OurMachine = lazy(() => import("../components/about/OurMachine"))
const WrokingProcessMachine = lazy(() => import("../components/about/WrokingProcessMachine"))

function About() {
    return (
        <React.Fragment>
            <Suspense fallback={""}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <HeroBanner
                        heroImage={heroImage}
                    />
                </motion.div>
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