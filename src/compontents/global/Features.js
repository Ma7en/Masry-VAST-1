import React from "react";
import { FaBroom, FaCreditCard, FaShieldAlt, FaUserCog } from "react-icons/fa";

const Features = () => {
    return (
        <>
            <section className=" features" id="features">
                <div className="container">
                    <div className="main-title">
                        <h2 className="h2 title">Our App Feature</h2>
                        <p className=" subtitle">Awesome Features</p>
                    </div>

                    <ul className="list">
                        <li className="item">
                            <div className="card">
                                <div className="icon">
                                    <FaBroom
                                        name="create-outline"
                                        className="i"
                                    />
                                </div>
                                <div className="desc">
                                    <h3 className="h3 title">Easy to Edit</h3>
                                    <p className="text">
                                        Lorem ipsum dolor sit cons ectetur
                                        adipiscing
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="item">
                            <div className="card">
                                <div className="icon">
                                    <FaShieldAlt
                                        name="shield-checkmark-outline"
                                        className="i"
                                    />
                                </div>
                                <div className="desc">
                                    <h3 className="h3 title">Fully Secure</h3>
                                    <p className="text">
                                        Lorem ipsum dolor sit cons ectetur
                                        adipiscing
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="item">
                            <div className="card">
                                <div className="icon">
                                    <FaUserCog
                                        name="settings-outline"
                                        className="i"
                                    />
                                </div>
                                <div className="desc">
                                    <h3 className="h3 title">Manage User</h3>
                                    <p className="text">
                                        Lorem ipsum dolor sit cons ectetur
                                        adipiscing
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="item">
                            <div className="card">
                                <div className="icon">
                                    <FaCreditCard
                                        name="cube-outline"
                                        className="i"
                                    />
                                </div>
                                <div className="desc">
                                    <h3 className="h3 title">Free Trial</h3>
                                    <p className="text">
                                        Lorem ipsum dolor sit cons ectetur
                                        adipiscing
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Features;
