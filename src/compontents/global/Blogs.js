import React from "react";
import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";

// import Blog1 from "../../images/blogs/blog-1.jpg";
// import Blog2 from "../../images/blogs/blog-2.jpg";
// import Blog3 from "../../images/blogs/blog-3.jpg";

const Blogs = () => {
    return (
        <>
            <section className=" blogs" id="blogs">
                <div className="container">
                    <div className="main-title">
                        <h2 className="h2 title">Recent Blogs</h2>

                        <p className=" subtitle">Our Tips And Latest News</p>
                    </div>

                    <ul className="list">
                        <li>
                            <div className="card">
                                <figure className="banner img-holder">
                                    <img
                                        // src={Blog1}
                                        src="images/blogs/blog-1.jpg"
                                        width={768}
                                        height={558}
                                        loading="lazy"
                                        alt="Build A Full Web Chat App From Our Scratch"
                                        className="img-cover"
                                    />
                                </figure>

                                <div className="content">
                                    <ul className="meta-list">
                                        <li className="meta-item">
                                            <FaCalendarAlt
                                                className="i"
                                                name="calendar-outline"
                                            />
                                            <time
                                                className="meta-text"
                                                dateTime="2022-05-22"
                                            >
                                                May 22,2022
                                            </time>
                                        </li>
                                        <li className="meta-item">
                                            <FaCommentDots
                                                className="i"
                                                name="chatbox-outline"
                                            />
                                            <p className="meta-text">
                                                2 Comment
                                            </p>
                                        </li>
                                    </ul>

                                    <div className="desc">
                                        <h3 className="h3">
                                            <a className="card-title">
                                                Build A Full Web Chat App From
                                                Our Scratch
                                            </a>
                                        </h3>
                                    </div>

                                    <a
                                        href="https://wa.me/+201128591125?text=mazen"
                                        className="btn btn-outline"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="card">
                                <figure className="banner img-holder">
                                    <img
                                        // src={Blog2}
                                        src="images/blogs/blog-2.jpg"
                                        width={768}
                                        height={558}
                                        loading="lazy"
                                        alt="Brush Strokes Energize Trees In Paintings"
                                        className="img-cover"
                                    />
                                </figure>
                                <div className="content">
                                    <ul className="meta-list">
                                        <li className="meta-item">
                                            <FaCalendarAlt
                                                className="i"
                                                name="calendar-outline"
                                            />
                                            <time
                                                className="meta-text"
                                                dateTime="2022-05-22"
                                            >
                                                May 22,2022
                                            </time>
                                        </li>
                                        <li className="meta-item">
                                            <FaCommentDots
                                                className="i"
                                                name="chatbox-outline"
                                            />
                                            <p className="meta-text">
                                                2 Comment
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="desc">
                                        <h3 className="h3">
                                            <a className="card-title">
                                                Brush Strokes Energize Trees In
                                                Paintings
                                            </a>
                                        </h3>
                                    </div>
                                    <a className="btn btn-outline">Read More</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="card">
                                <figure className="banner img-holder">
                                    <img
                                        // src={Blog3}
                                        src="images/blogs/blog-3.jpg"
                                        width={768}
                                        height={558}
                                        loading="lazy"
                                        alt="Insights on How to Improve Your Teaching."
                                        className="img-cover"
                                    />
                                </figure>
                                <div className="content">
                                    <ul className="meta-list">
                                        <li className="meta-item">
                                            <FaCalendarAlt
                                                className="i"
                                                name="calendar-outline"
                                            />
                                            <time
                                                className="meta-text"
                                                dateTime="2022-05-22"
                                            >
                                                May 22,2022
                                            </time>
                                        </li>
                                        <li className="meta-item">
                                            <FaCommentDots
                                                className="i"
                                                name="chatbox-outline"
                                            />
                                            <p className="meta-text">
                                                2 Comment
                                            </p>
                                        </li>
                                    </ul>

                                    <div className="desc">
                                        <h3 className="h3">
                                            <a className="card-title">
                                                Insights on How to Improve Your
                                                Teaching.
                                            </a>
                                        </h3>
                                    </div>

                                    <a className="btn btn-outline">Read More</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Blogs;
