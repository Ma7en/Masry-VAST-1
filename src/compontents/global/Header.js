import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <>
            <header className={sticky ? "header open" : "header"} id="header">
                <div className="container">
                    <Link to="/" className="logo">
                        VAST
                    </Link>

                    <nav className={navbar ? "navbar open" : "navbar"}>
                        <ul className="navbar-list">
                            <li>
                                <Link
                                    className="navbar-link"
                                    to="landing"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="navbar-link"
                                    to="features"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="navbar-link"
                                    to="Acquaintance"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Acquaintance
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="navbar-link"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="navbar-link"
                                    to="downapp"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    App
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="navbar-link"
                                    to="blogs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Blogs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="navbar-link"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-170}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="btn btn-primary"
                                    to="downapp"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        setNavbar(false);
                                    }}
                                >
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="nav-toggle-btn">
                        {navbar ? (
                            <FaTimes
                                name="menu-outline"
                                id="toggle-menu"
                                className="fa fa-times"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            />
                        ) : (
                            <FaBars
                                name="menu-outline"
                                id="toggle-menu"
                                className="fa"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            />
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
