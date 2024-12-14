import React from 'react'
import "./HomeAbout.scss"
import { fadeIn } from '../../../Util/variants.js'
import { motion } from 'framer-motion'
import greenComposeMachineOne from "../../../assets/images/home/green_compose_machine_one.png"

function HomeAbout() {
    return (
        <React.Fragment>
            <div className='home-about-con'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}

                    className='home-about-con__text-con'>
                    <h1 className='home-about-con__text-con__head'>ABOUT US</h1>
                    <p className='home-about-con__text-con__text-one'>Established in year 2024 GREEN COMPOSTE engaged in manufacturing of organic waste Reprocessor . We offer an array of Product like :  FOOD  WASTE  REPROCESSOR , SHRERRDERS , LARGE METAL DUSTBINS etc .</p>
                    <p className='home-about-con__text-con__text-two'>We are currently operating under the guidance of MR . MANISH UPADHYAY , Who has rich knowledge of the domain our mission is to provide quality products and increase market share through cost efficient and well engineered product.</p>
                    <div className='home-about-con__text-con__btn-con'>
                        <button className='home-about-con__text-con__btn-con__btn'>READ MORE</button>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='home-about-con__image-con'>
                    <img src={greenComposeMachineOne} alt='Green Compose Machine'
                    />
                </motion.div>
            </div>
        </React.Fragment>
    )
}

export default HomeAbout