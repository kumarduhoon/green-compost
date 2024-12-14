import React from 'react'
import HomeHero from "../components/home/homeHero/HomeHero"
import HomeBasicKnowledge from "../components/home/homeBasicKnowledge/HomeBasicKnowledge"
import HomeAbout from "../components/home/homeAbout/HomeAbout"
import HomeMisson from "../components/home/homeMisson/HomeMisson"
import HomeMachine from "../components/home/homeMachine/HomeMachine"
import HomeProcess from "../components/home/homeProcess/HomeProcess"
import HomeProduct from "../components/home/homeProducts/HomeProduct"
import HomeSocialLinks from "../components/home/homeSocialLink/HomeSocialLinks"

function Home() {
    return (
        <React.Fragment>
            <HomeHero />
            <HomeBasicKnowledge />
            <HomeAbout />
            <HomeMisson />
            <HomeMachine />
            <HomeProcess />
            <HomeProduct />
            <HomeSocialLinks />
        </React.Fragment>
    )
}

export default Home