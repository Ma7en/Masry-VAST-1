import React from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className=" contact" id="contact">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <div className="brand">
                        <a className="logo">VAST</a>

                        <div className="desc">
                            <p className="text">
                                Duis cursus, mi quis viverra ornare, eros dolor
                                interdum nulla utimp erdiet commodo diam libero
                                vitae nibh et jus cursus id rutrum lore
                                imperdiet ut sem vitae risus tristique posuere
                            </p>
                        </div>

                        <ul className="social">
                            <li>
                                <a className="link">
                                    <FaFacebookF
                                        className="i"
                                        name="logo-facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="link">
                                    <FaTwitter
                                        className="i"
                                        name="logo-twitter"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="link">
                                    <FaInstagram
                                        className="i"
                                        name="logo-google"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="link">
                                    <FaLinkedinIn
                                        className="i"
                                        name="logo-linkedin"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Company</p>
                        </li>
                        <li>
                            <a className="footer-link">About Us</a>
                        </li>
                        <li>
                            <a className="footer-link">Contact Us</a>
                        </li>
                        <li>
                            <a className="footer-link">Core Services</a>
                        </li>
                        <li>
                            <a className="footer-link">Our Team</a>
                        </li>
                        <li>
                            <a className="footer-link">Pricing Plan</a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Useful Links</p>
                        </li>
                        <li>
                            <a className="footer-link">Contact Us</a>
                        </li>
                        <li>
                            <a className="footer-link">Privacy Policy</a>
                        </li>
                        <li>
                            <a className="footer-link">App Download</a>
                        </li>
                        <li>
                            <a className="footer-link">How It Works</a>
                        </li>
                        <li>
                            <a className="footer-link">
                                Terms &amp; Conditions
                            </a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Get In Touch</p>
                        </li>

                        <li className="footer-item">
                            <FaPhoneAlt className="i" name="call-outline" />
                            <a href="tel:+201144906204" className="item-link">
                                +201144906204
                            </a>
                        </li>

                        <li className="footer-item">
                            <FaEnvelope className="i" name="mail-outline" />
                            <a
                                href="mailto:m9ee9m@gmail.com?subject=Contact"
                                className="item-link"
                            >
                                m9ee9m@gmail.com
                            </a>
                        </li>

                        <li className="footer-item">
                            <FaMapMarkerAlt className="i" name="map-outline" />
                            <address className="item-link address">
                                3004 3 rd Ln,
                                <br />
                                Los Angeles, Calnia, 11
                            </address>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Contact;
