import React from 'react'
import "./HomeMachine.scss"
import processImg from "../../../assets/images/home/composting-waste-processing.jpg"
function HomeMachine() {

    return (
        <React.Fragment>
            <div className="waste-composting-process">
                <h2 className='waste-composting-process-heading'>WASTE COMPOSTING PROCESS</h2>
                <p className='waste-composting-process-text'>Processes all types of Organic & Horticulture Waste in Four Basic Steps</p>
                <div className='waste-composting-process-img'>
                    <img src={processImg} alt='processImg' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeMachine