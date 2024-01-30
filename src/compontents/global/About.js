import React from "react";

// import AboutBanner2 from "../../images/about/about-banner-2.png";

const About = () => {
    return (
        <>
            <section className="section about" id="about">
                <div className="container">
                    <div className="content">
                        <div className="main-title">
                            <h2 className="h2 title">
                                Cool &amp; Amazing Design
                            </h2>

                            <p className=" subtitle">
                                We Develop Amazing App For Startups
                            </p>
                        </div>

                        <div className="desc">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consec tetur
                                adipiscing elit. Ut elit tellus, luc tus nec
                                ullamcorper mattis, pulvinar dapibus leo. Lorem
                                ipsum dolor sit amet, consec tetur adipiscing
                                elit. Ut elit tellus, luc tus nec ullam corper.
                            </p>

                            <p className="text">
                                Lorem ipsum dolor sit amet, consec tetur
                                adipiscing elit. Ut elit tellus, luc tus nec
                                ullamcorper mattis, pulvinar dapibus leo. Lorem
                                ipsum dolor.
                            </p>

                            <a href="#" className="btn btn-secondary">
                                Discover More
                            </a>
                        </div>
                    </div>

                    <figure className="banner">
                        <img
                            // src={AboutBanner2}
                            src="images/about/about-banner-2.png"
                            // width={1146}
                            // height={1226}
                            loading="lazy"
                            alt="about banner"
                            className="w-100"
                        />
                    </figure>
                </div>
            </section>
        </>
    );
};

export default About;
