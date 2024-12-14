import React from "react";
import "./HomeSocialLink.scss";
import { fadeIn } from '../../../Util/variants.js'
import { motion } from 'framer-motion'
import fb from "../../../assets/images/home/facebook_logo.png"
import linkedin from "../../../assets/images/home/linkedIn_logo.png"
import insta from "../../../assets/images/home/insta_logo.png"
import hss from "../../../assets/images/home/hssIndai.png"

function HomeSocialLinks() {
    return (
        <div className="home-social-links-container">
            <h2 className="home-social-links-title">LINKS</h2>
            <motion.div
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}

                className="home-social-links-icons-container">
                <div className="home-social-links-icon">
                    <img
                        src={insta}
                        alt="Instagram"
                        className="home-social-links-icon-image"
                    />
                </div>
                <div className="home-social-links-icon">
                    <img
                        src={fb}
                        alt="Facebook"
                        className="home-social-links-icon-image"
                    />
                </div>
                <div className="home-social-links-icon">
                    <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="home-social-links-icon-image"
                    />
                </div>
                <div className="home-social-links-icon">
                    <img
                        src={hss}
                        alt="LinkedIn"
                        className="home-social-links-icon-image"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default HomeSocialLinks;
