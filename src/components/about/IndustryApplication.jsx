import React from 'react'
import "./IndustryApplication.scss"
import IndustryApplicationImg from "../../assets/images/about/industry_application.png"
function IndustryApplication() {
    return (
        <React.Fragment>
            <div className='industry-application-con'>
                <h1 className='industry-application-con__head'>INDUSTRY APPLICATION</h1>
                <div className='industry-application-con__img-con'>
                    <img src={IndustryApplicationImg} alt="Image Alt" loading="lazy" className='industry-application-con__img-con__img' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default IndustryApplication