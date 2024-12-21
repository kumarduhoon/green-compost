import React from 'react'
import "./HomeMachine.scss"
import greenComposeMachineTwo from "../../../assets/images/home/food_waste_composting_machine.png"
import { Link } from 'react-router-dom'

function HomeMachine() {
    return (
        <React.Fragment>
            <div className='home-machine-con'>
                <div
                    className='home-machine-con__text-con'>
                    <h1 className='home-machine-con__text-con__head'>OUR MACHINE</h1>
                    <p className='home-machine-con__text-con__text-one'>GREEN COMPOSTE is committed to helping the globe achieve
                        zero food waste by providing automatic organic food waste
                        composting solutions and systems for all kinds of businesses
                        and homes.</p>
                    <p className='home-machine-con__text-con__text-two'>Our goal is to help achieve sustainability, allowing
                        the food waste from the farms, restaurants, hotels, food
                        processing plants, etc. to go back to the farms as fertilizer for
                        future food through our food recycler machines . </p>
                    <div className='home-machine-con__text-con__btn-con'>
                        <Link to='/products'>
                            <button className='home-machine-con__text-con__btn-con__btn'>READ MORE</button>
                        </Link>
                    </div>
                </div >
                <div
                    className='home-machine-con__image-con'>
                    <img src={greenComposeMachineTwo} alt='Green Compose Machine'
                        className='home-machine-con__image-con__img'
                    />
                </div >
            </div>
        </React.Fragment>
    )
}

export default HomeMachine