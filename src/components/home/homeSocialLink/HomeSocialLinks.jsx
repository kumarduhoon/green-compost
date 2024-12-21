import React from "react";
import "./HomeSocialLink.scss";
import fb from "../../../assets/images/home/facebook_logo.png"
import linkedin from "../../../assets/images/home/linkedIn_logo.png"
import insta from "../../../assets/images/home/insta_logo.png"
import hss from "../../../assets/images/home/hssIndai.png"
import { Link } from "react-router-dom";

function HomeSocialLinks() {
    return (
        <div className="home-social-links-container">
            <h2 className="home-social-links-title">LINKS</h2>
            <div
                className="home-social-links-icons-container">
                <div className="home-social-links-icon">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={insta}
                            alt="Instagram"
                            className="home-social-links-icon-image"
                        />
                    </Link>
                </div>
                <div className="home-social-links-icon">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={fb}
                            alt="Facebook"
                            className="home-social-links-icon-image"
                        />
                    </Link>
                </div>
                <div className="home-social-links-icon">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="home-social-links-icon-image"
                        />
                    </Link>
                </div>
                <div className="home-social-links-icon">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={hss}
                            alt="LinkedIn"
                            className="home-social-links-icon-image"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSocialLinks;
