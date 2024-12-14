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
            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="reprocessor-title">
                    HOW ORGANIC / FOOD WASTE REPROCESSOR WORKS?
                </h2>
                <p className="reprocessor-subtitle">
                    Based on the heating system, the main composting tank mixes organic
                    waste for 24 hours and turns it into organic manure.
                </p>
            </motion.div>
            <div className="reprocessor-process-flow">
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className="reprocessor-step">
                    <img
                        src={stepOne}
                        alt="Organic Waste"
                        className="reprocessor-image"
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className="reprocessor-arrow">➜</motion.div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className="reprocessor-step">
                    <img
                        src={stepTwo}
                        alt="Decomposed Waste"
                        className="reprocessor-image"
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className="reprocessor-arrow">➜</motion.div>
                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className="reprocessor-step">
                    <img
                        src={stepThree}
                        alt="Organic Manure"
                        className="reprocessor-image"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HomeProcess;
