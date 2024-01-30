import React from "react";

// import LandingBanner from "../../images/landing/hero-banner.png";
// import AppStore from "../../images/downapp/app-store.png";
// import PlayStore from "../../images/downapp/play-store.png";

const Landing = () => {
    return (
        <>
            <section className="landing" id="landing">
                <div className="container">
                    <div className="content">
                        <div className="main-title">
                            <h1 className="h1 title">
                                Best Mobile App 12 day free
                            </h1>
                            <p className=" subtitle">
                                Make an Impression &amp; Drive More Downloads
                                With VAST
                            </p>
                        </div>

                        <div className="desc">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididu
                                ut labore et dolore magna aliqua. Ut enim ad
                                minim veniamquis nostrud
                            </p>
                        </div>

                        <ul className="list">
                            <li>
                                <a href="#" className="link">
                                    <img
                                        // src={AppStore}
                                        src="images/downapp/app-store.png"
                                        width={185}
                                        height={69}
                                        alt="app store"
                                        className="img"
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="link">
                                    <img
                                        // src={PlayStore}
                                        src="images/downapp/play-store.png"
                                        width={185}
                                        height={69}
                                        alt="play store"
                                        className="img"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <figure className="banner">
                        <img
                            // src={LandingBanner}
                            src="images/landing/hero-banner.png"
                            width={769}
                            height={804}
                            alt="landing banner"
                            className="w-100"
                        />
                    </figure>
                </div>

                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>
            </section>
        </>
    );
};

export default Landing;
