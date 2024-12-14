import React from 'react'
import "./Footer.scss"
import logo from "../../assets/images/home/green_composte.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>+91-129-4057336, +91 95969 29377</p>
                    <p>sales@greencompost.com</p>
                    <div className="social-icons">
                        <h3>Follow us :</h3>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Main Links</h3>
                    <div className="footer-section-con">
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">Sitemap</a>
                        <a href="#">Company Profile</a>
                        <a href="#">Contact</a>
                    </div>

                </div>
                <div className="footer-section newsletter">
                    <div><h3>Join Us</h3>
                        <a href="#">Contact</a></div>
                    <img src={logo} alt='logo' className='logo-img' />

                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2024 - Green Composite. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer