import React from "react";

// import PlayStore from "../../images/downapp/play-store.png";
// import AppStore from "../../images/downapp/app-store.png";
// import AppImage from "../../images/downapp/app.png";

const Downapp = () => {
    return (
        <>
            <section className=" downapp" id="downapp">
                <div className="container">
                    <figure className="banner">
                        <img
                            // src={AppImage}
                            src="images/downapp/app.png"
                            width={449}
                            height={608}
                            loading="lazy"
                            alt="app banner"
                            className="w-100"
                        />
                    </figure>

                    <div className="content">
                        <div className="main-title">
                            <h2 className="h2 title">Download Our App</h2>

                            <p className=" subtitle">
                                Get The App For Free And Start Now
                            </p>
                        </div>

                        <div className="desc">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consec tetur
                                adipiscing elit. Ut elit tellus, luc tus nec
                                ullamcorper mattis, pulvinar dapibus leo. Lorem
                                ipsum dolor sit amet con Lorem ipsum dolor
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
                </div>
            </section>
        </>
    );
};

export default Downapp;
