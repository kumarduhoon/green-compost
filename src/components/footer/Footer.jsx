import React from 'react'
import "./Footer.scss"
import logo from "../../assets/images/home/green_composte.png"
import { Link } from 'react-router-dom'

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
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"

                        ><i className="fab fa-facebook-f"></i></Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                        ><i className="fab fa-instagram"></i></Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                        ><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Main Links</h3>
                    <div className="footer-section-con">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/site-map'>Sitemap</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                </div>
                <div className="footer-section newsletter">
                    <div><h3>Join Us</h3>
                        <Link to="/contact">Contact</Link></div>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='logo-img' />
                    </Link>

                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2024 - Green Composite. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer