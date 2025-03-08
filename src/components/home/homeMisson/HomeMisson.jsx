import React from 'react'
import "./HomeMisson.scss"
import homeMisson from "../../../assets/images/home/home_misson.png"
import { Link } from 'react-router-dom'
function HomeMisson() {
    return (
        <React.Fragment>
            <div className='home-misson-con'>
                <div
                    className='home-misson-con__image-con'>
                    <img src={homeMisson} alt='Home Misson' />
                </div>
                <div
                    className='home-misson-con__text-con'>
                    <h1 className='home-misson-con__text-con__head'>OUR MISSION</h1>
                    <p className='home-misson-con__text-con__text-one'>At Green Composte (Green Compost), our mission is to revolutionize waste management by delivering
                        innovative and sustainable solutions. We are dedicated to manufacturing high-quality
                        organic waste reprocessors, shredders, and waste handling equipment that empower
                        communities and industries to reduce waste, conserve resources, and promote
                        environmental health. Guided by a commitment to excellence, cost-efficiency, and
                        engineering precision, we strive to enhance market share while contributing to a cleaner,
                        greener planet.</p>

                    <div className='home-misson-con__text-con__btn-con'>
                        <Link to='/about'>
                            <button className='home-misson-con__text-con__btn-con__btn'>READ MORE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeMisson
