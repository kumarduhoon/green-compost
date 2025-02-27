import React from "react";
import "./HomeProcess.scss";
import { fadeIn } from '../../../Util/variants.js'
import { motion } from 'framer-motion'
import stepOne from "../../../assets/images/home/transform-step-1.png"
import stepTwo from "../../../assets/images/home/transform-step-2.png"
import stepThree from "../../../assets/images/home/transform-step-3.png"


function HomeProcess() {
    return (
        <div className="reprocessor-container">
            <div>
                <h2 className="reprocessor-title">
                    HOW ORGANIC / FOOD WASTE REPROCESSOR WORKS?
                </h2>
                <p className="reprocessor-subtitle">
                    Based on the heating system, the main composting tank mixes organic
                    waste for 24 hours and turns it into organic manure.
                </p>
            </div>
            <div className="reprocessor-process-flow">
                <div className="reprocessor-step">
                    <img
                        src={stepOne}
                        alt="Organic Waste"
                        className="reprocessor-image"
                    />
                </div>
                <div className="reprocessor-arrow">➜</div>
                <div className="reprocessor-step">
                    <img
                        src={stepTwo}
                        alt="Decomposed Waste"
                        className="reprocessor-image"
                    />
                </div>
                <div className="reprocessor-arrow">➜</div>
                <div
                    className="reprocessor-step">
                    <img
                        src={stepThree}
                        alt="Organic Manure"
                        className="reprocessor-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeProcess;
