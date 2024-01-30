import React from "react";
import { FaChartPie, FaFolderOpen } from "react-icons/fa";

// import AboutBanner1 from "../../images/about/about-banner-1.png";

const Acquaintance = () => {
    return (
        <>
            <section className=" acquaintance" id="Acquaintance">
                <div className="container">
                    <figure className="banner">
                        <img
                            // src={AboutBanner1}
                            src="images/about/about-banner-1.png"
                            width={1262}
                            height={1357}
                            loading="lazy"
                            alt="about banner"
                            className="w-100"
                        />
                    </figure>

                    <div className="content">
                        <div className="main-title">
                            <h2 className="h2 title">Our Acquaintance</h2>

                            <p className=" subtitle">
                                We Are Trusted By Thousands Of People
                            </p>
                        </div>

                        <div className="desc">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consec tetur
                                adipiscing elit. Ut elit tellus, luc tus nec
                                ullamcorper mattis, pulvinar dapibus leo. Lorem
                                ipsum dolor sit amet, consec tetur adipiscing
                                elit. Ut elit tellus, luc tus nec ullam corpe
                            </p>
                        </div>

                        <ul className="list">
                            <li className="item">
                                <div className="icon">
                                    <FaFolderOpen className="i" name="folder" />
                                </div>

                                <div className="desc">
                                    <h3 className="h3 item-title">
                                        Device Quality Design
                                    </h3>
                                    <p className="item-text">
                                        Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit Lorem ipsum dolor sit
                                        amet, consec tetur adipiscing elit.
                                    </p>
                                </div>
                            </li>

                            <li className="item">
                                <div className="icon">
                                    <FaChartPie
                                        className="i"
                                        name="pie-chart"
                                    />
                                </div>

                                <div className="desc">
                                    <h3 className="h3 item-title">
                                        Easy to Manage Data
                                    </h3>
                                    <p className="item-text">
                                        Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit Lorem ipsum dolor sit
                                        amet, consec tetur adipiscing elit.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <a href="#" className="btn btn-secondary">
                            Discover More
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Acquaintance;
