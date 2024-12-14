import React, { useEffect } from 'react'
import "./WrokingProcessMachine.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import headerImage from "../../assets/images/about/work-process-head.png"
import wrokingProcessMachines from "../../assets/images/about/working_process.png"

function WrokingProcessMachine() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);
    return (
        <React.Fragment>
            <div className='wroking-process-machine-con'>
                <div data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    className='wroking-process-machine-con__header-img-con'>
                    <img src={headerImage} alt="Image Alt" loading="lazy" className='wroking-process-machine-con__img' />
                    <h1 className='wroking-process-machine-con__head'>
                        WORKING PROCESS OF MACHINE
                    </h1>
                </div>
                <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className='wroking-process-machine-con__content-con'>
                    <p className='wroking-process-machine-con__content-con_text'>
                        Composting is a biological process in which microorganism convert organic waste into compost. The compost looks like dry soil and is an excellent medium for growing plants. When organic waste is added to it, moisture is sensed by the humidity sensor, due to which the heater turns ON and the composting tank gets heated. Due to this, the water contained in the organic waste is evaporated and it goes out to the atmosphere as water vapour through the exhaust. As any organic waste contains 70-80% water content, we achieve 70- 80% volume reduction at this stage itself. The process is completely noiseless as there is no crushing or grinding involved. The blades are just for evenly mixing the waste.
                    </p>
                    <img
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        src={wrokingProcessMachines} alt="Image Alt" loading="lazy" className='wroking-process-machine-con__content-con__img' />
                </div>
            </div>

        </React.Fragment>
    )
}

export default WrokingProcessMachine