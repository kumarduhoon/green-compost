import React from 'react'
import headerImage from "../../assets/images/about/work-process-head.png"
import "./WorkProcess.scss"
import stepOne from "../../assets/images/about/step-1.png"
import stepTwo from "../../assets/images/about/step-2.png"
import stepThree from "../../assets/images/about/step-3.png"
import stepIcon from "../../assets/images/about/Icon.png"

function WorkProcess() {
    return (
        <React.Fragment>
            <div className='work-process-con'>
                <div className='work-process-con__header-img-con'>
                    <img src={headerImage} alt="Image Alt" loading="lazy" className='work-process-con__img' />
                    <h1 className='work-process-con__head'>
                        WHAT WE DO ?
                    </h1>
                </div>
                <div className='work-process-con__contain-con'>
                    <div className='work-process-con__contain-con-text'>
                        <div className='work-process-con__contain-con-text-one'><b>Loading the Food Waste: </b>Waste food materials are loaded into the machine, which is designed to handle all types of organic food waste, from vegetable scraps to cooked leftovers. Simply place the waste inside, and the machine begins its work immediately.</div>
                        <div className='work-process-con__contain-con-img-one'>
                            <img src={stepOne} alt="Image Alt" loading="lazy" className='work-process-con__contain-con-img-arrow__img' />
                        </div>
                    </div>
                    <div className='work-process-con__contain-con-text'>
                        <div></div>
                        <div className='work-process-con__contain-con-img-arrow'>
                            <img src={stepIcon} alt="Image Alt" loading="lazy" className='work-process-con__contain-con-img-arrow__img' />
                        </div>
                    </div>
                    <div className='work-process-con__contain-con-text'>
                        <div className='work-process-con__contain-con-text-two'><b>Eco-Friendly Decomposition Process:</b>
                            Once loaded, the machine initiates a rapid decomposition process, utilizing advanced microbial technology to break down the waste efficiently. This process is carefully controlled to ensure the waste transforms without producing unpleasant odors or harmful byproducts.
                        </div>
                        <div className='work-process-con__contain-con-img-two'>
                            <img src={stepTwo} alt="Image Alt" loading="lazy" className='work-process-con__contain-con-img-arrow__img' />
                        </div>
                    </div>
                    <div className='work-process-con__contain-con-text'>
                        <div></div>
                        <div className='work-process-con__contain-con-img-arrow'>
                            <img src={stepIcon} alt="Image Alt" loading="lazy" className='work-process-con__contain-con-img-arrow__img' />
                        </div>
                    </div>
                    <div className='work-process-con__contain-con-text'>
                        <div className='work-process-con__contain-con-text-three'>
                            <b>Ready-to-Use Compost in 24 Hours: </b>Within just 24 hours, the waste is fully decomposed and transformed into nutrient-rich compost. This compost can be used to enrich soil, helping plants thrive and reducing waste impact, while also creating a sustainable resource.
                        </div>
                        <div className='work-process-con__contain-con-img-three'>
                            <img src={stepThree} alt="Image Alt" loading="lazy" className='work-process-con__contain-con-img-arrow__img' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WorkProcess