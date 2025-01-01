import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Mob. No - +91 99586 29977 </p>
                    <p>Email - sales@greencomposte.com</p>
                    <div className="social-icons">
                        <h3>Follow us :</h3>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to="https://www.linkedin.com/company/greencomposte"

                        ><i className="fab fa-facebook-f"></i></Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to='https://www.instagram.com/greencomposte'
                        ><i className="fab fa-instagram"></i></Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to='https://www.linkedin.com/company/greencomposte'
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
                    <div><h3>Address</h3>
                        <div>Plot no. 382, Sec.- 68, IMT Faridabad, Haryana, India</div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2024 - Green Composite. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer