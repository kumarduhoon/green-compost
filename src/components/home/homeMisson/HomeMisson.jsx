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
                    <p className='home-misson-con__text-con__text-one'>Established in year 2024 GREEN COMPOSTE engaged in manufacturing of organic waste Reprocessor . We offer an array of Product like :  FOOD  WASTE  REPROCESSOR , SHRERRDERS , LARGE METAL DUSTBINS etc .</p>
                    <p className='home-misson-con__text-con__text-two'>We are currently operating under the guidance of MR . MANISH UPADHYAY , Who has rich knowledge of the domain our mission is to provide quality products and increase market share through cost efficient and well engineered product.</p>
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
