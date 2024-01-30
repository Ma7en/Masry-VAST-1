import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
    const newDate = new Date();
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <p className="copyright">
                        <span>©</span>
                        <span className="dateYear">
                            {` ${newDate.getFullYear()} `}
                        </span>
                        {` All Rights Reserved by `}
                        <Link
                            to="landing"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="link"
                        >
                            Mazen Saad
                        </Link>
                        .
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
