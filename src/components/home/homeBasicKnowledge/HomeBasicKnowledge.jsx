import React, { useEffect, useState } from 'react'
import "./HomeBasicKnowledge.scss"
import { fadeIn } from '../../../Util/variants.js'
import { motion } from 'framer-motion'
import homeBasicKnowledge from "../../../assets/images/home/home_basic_knowledge.png"

function HomeBasicKnowledge() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log(screenSize, "screenSize")
    return (
        <React.Fragment>
            {screenSize <= 768 ? <div className='home-basic-knoeledage-con'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}

                    className='home-basic-knoeledage-con__image-con'>
                    <img src={homeBasicKnowledge} alt="home basic knowledge" className='home-basic-knoeledage-con__image-con__image' />
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}

                    className='home-basic-knoeledage-con__text-con-one'>
                    <h1 className='home-basic-knoeledage-con__text-con-one__head'>ORGANIC  WASTE COMPOSTING SYSTEM</h1>
                    <p className='home-basic-knoeledage-con__text-con-one__text'>Convert your organic waste into gold with GREEN COMPOSTE</p>
                    <button className='home-basic-knoeledage-con__text-con-one__btn'>FIND MORE</button>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='home-basic-knoeledage-con__text-con-two'>
                    <h1 className='home-basic-knoeledage-con__text-con-two__head-one'>
                        90%
                    </h1>
                    <h1 className='home-basic-knoeledage-con__text-con-two__head-two'>REDUCE ORGANIC WASTE</h1>
                    <p className='home-basic-knoeledage-con__text-con-two__text'>Divert waste from landfills and produce fertilizer for landscapnig , gardening and farming .</p>
                    <button className='home-basic-knoeledage-con__text-con-one__btn'>VIEW MORE</button>
                </motion.div >
            </div> : <div className='home-basic-knoeledage-con'>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}

                    className='home-basic-knoeledage-con__image-con'>
                    <img src={homeBasicKnowledge} alt="home basic knowledge" className='home-basic-knoeledage-con__image-con__image' />
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}

                    className='home-basic-knoeledage-con__text-con-one'>
                    <h1 className='home-basic-knoeledage-con__text-con-one__head'>ORGANIC  WASTE COMPOSTING SYSTEM</h1>
                    <p className='home-basic-knoeledage-con__text-con-one__text'>Convert your organic waste into gold with GREEN COMPOSTE</p>
                    <button className='home-basic-knoeledage-con__text-con-one__btn'>FIND MORE</button>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='home-basic-knoeledage-con__text-con-two'>
                    <h1 className='home-basic-knoeledage-con__text-con-two__head-one'>
                        90%
                    </h1>
                    <h1 className='home-basic-knoeledage-con__text-con-two__head-two'>REDUCE ORGANIC WASTE</h1>
                    <p className='home-basic-knoeledage-con__text-con-two__text'>Divert waste from landfills and produce fertilizer for landscapnig , gardening and farming .</p>
                    <button className='home-basic-knoeledage-con__text-con-one__btn'>VIEW MORE</button>
                </motion.div >
            </div>}

        </React.Fragment>
    )
}
export default HomeBasicKnowledge
