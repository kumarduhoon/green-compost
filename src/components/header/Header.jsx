import React, { useEffect, useState } from 'react'
import "./Header.scss"
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/home/green_composte.png"


function Header() {
    const [showNavbar, setShowNavbar] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    const handleLinkClick = () => {
        setShowNavbar(false);
    };
    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Company Logo" className="logo_img" />
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                end
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `${isActive ? "active" : ""} ${isScrolled ? "scrolled-link" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `${isActive ? "active" : ""} ${isScrolled ? "scrolled-link" : ""}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `${isActive ? "active" : ""} ${isScrolled ? "scrolled-link" : ""}`
                                }
                            >
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/site-map"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `${isActive ? "active" : ""} ${isScrolled ? "scrolled-link" : ""}`
                                }
                            >
                                Site Map
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `${isActive ? "active" : ""} ${isScrolled ? "scrolled-link" : ""}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header



const Hamburger = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="24"
        viewBox="0 0 52 24"
    >
        <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 47)"
                fill="#574c4c"
            />
            <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 67)"
                fill="#574c4c"
            />
            <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                width="52"
                height="4"
                rx="2"
                transform="translate(294 57)"
                fill="#574c4c"
            />
        </g>
    </svg>
);