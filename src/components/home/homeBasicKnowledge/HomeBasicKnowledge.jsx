import React from 'react'
import "./HomeBasicKnowledge.scss"
import homeBasicKnowledge from "../../../assets/images/home/home_basic_knowledge.png"
import { Link } from 'react-router-dom'

function HomeBasicKnowledge() {

    return (
        <React.Fragment>
            <div className='home-basic-knoeledage-con'>
                <div
                    className='home-basic-knoeledage-con__image-con'>
                    <img src={homeBasicKnowledge} alt="home basic knowledge" className='home-basic-knoeledage-con__image-con__image' />
                </div>
                <div
                    className='home-basic-knoeledage-con__text-con-one'>
                    <h1 className='home-basic-knoeledage-con__text-con-one__head'>ORGANIC  WASTE COMPOSTING SYSTEM</h1>
                    <p className='home-basic-knoeledage-con__text-con-one__text'>Convert your organic waste into gold with GREEN COMPOSTE</p>
                    <Link to='/about'>
                        <button className='home-basic-knoeledage-con__text-con-one__btn'>FIND MORE</button>
                    </Link>
                </div>
                <div
                    className='home-basic-knoeledage-con__text-con-two'>
                    <h1 className='home-basic-knoeledage-con__text-con-two__head-one'>
                        90%
                    </h1>
                    <h1 className='home-basic-knoeledage-con__text-con-two__head-two'>REDUCE ORGANIC WASTE</h1>
                    <p className='home-basic-knoeledage-con__text-con-two__text'>Divert waste from landfills and produce fertilizer for landscapnig , gardening and farming .</p>
                    <Link to='/about'>
                        <button className='home-basic-knoeledage-con__text-con-one__btn'>VIEW MORE</button>
                    </Link>
                </div >
            </div>
        </React.Fragment>
    )
}
export default HomeBasicKnowledge
