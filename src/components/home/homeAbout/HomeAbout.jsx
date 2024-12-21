import React from 'react'
import "./HomeAbout.scss"
import greenComposeMachineOne from "../../../assets/images/home/green_compose_machine_one.png"
import { Link } from 'react-router-dom'

function HomeAbout() {
    return (
        <React.Fragment>
            <div className='home-about-con'>
                <div
                    className='home-about-con__text-con'>
                    <h1 className='home-about-con__text-con__head'>ABOUT US</h1>
                    <p className='home-about-con__text-con__text-one'>Established in year 2024 GREEN COMPOSTE engaged in manufacturing of organic waste Reprocessor . We offer an array of Product like :  FOOD  WASTE  REPROCESSOR , SHRERRDERS , LARGE METAL DUSTBINS etc .</p>
                    <p className='home-about-con__text-con__text-two'>We are currently operating under the guidance of MR . MANISH UPADHYAY , Who has rich knowledge of the domain our mission is to provide quality products and increase market share through cost efficient and well engineered product.</p>
                    <div className='home-about-con__text-con__btn-con'>
                        <Link to='/about'>
                            <button className='home-about-con__text-con__btn-con__btn'>READ MORE</button>
                        </Link>
                    </div>
                </div>
                <div
                    className='home-about-con__image-con'>
                    <img src={greenComposeMachineOne} alt='Green Compose Machine'
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeAbout