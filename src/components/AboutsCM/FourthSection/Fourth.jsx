import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fourth() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fakeApiData = [
            {
                id: 1,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/1.jpg",
                name: "Top Quality, Beautiful Location",
                desc: "Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all this money. How come you always dress like you're doing your laundry? So, how 'bout them Knicks? What kind of a father would I be if I said no?.",
                userName: "Eileen R. Chu",
                job: "Photographer",
            },
            {
                id: 2,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/2.jpg",
                name: "Top Quality, Beautiful Location",
                desc: "I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! As an interesting side note.",
                userName: "Betty J. Turner",
                job: "Sale Agents",
            },
            {
                id: 3,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/3.jpg",
                name: "Top Quality, Beautiful Location",
                desc: "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
                userName: "Alfredo S. Rocha",
                job: "Project Manager",
            },
            {
                id: 4,
                img: "https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg",
                name: "Top Quality, Beautiful Location",
                desc: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing.",
                userName: "Donald D. Spurr",
                job: "CTO, COmpany",
            },
        ];

        setComments(fakeApiData);
    }, []);
    return (
        <>
            <div id="fourth-Section">
                <div className="container-fluid">
                    <div className="row gx-5 sec-5">
                    <div className="col-12">
                        <div className="about-us-title text-center">
                            <h4>Latest Testimonals</h4>
                            <h2 className="center">What People Say</h2>
                            <hr />
                        </div>
                        </div>
                        <div className="col-12">
                            <div className="row all-comments">
                                {comments.map((comment) => (
                                    <div className="comments">
                                        <div>
                                            <div className="stars">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="13"
                                                    height="13"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="13"
                                                    height="13"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="13"
                                                    height="13"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="13"
                                                    height="13"
                                                    fill="currentColor"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="13"
                                                    height="13"
                                                    fill="currentColor"
                                                    class="bi bi-star"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </div>
                                            <div className="title">
                                                <p>{comment.name}</p>
                                            </div>
                                            <div className="desc">
                                                <p>
                                                    "{comment.desc}"
                                                </p>
                                            </div>
                                            <div className="image-name">
                                                <div className="image">
                                                    <img
                                                        src={comment.img} alt="user-comment"
                                                    />
                                                </div>
                                                <div className="name-info">
                                                    <p className="name">{comment.userName}</p>
                                                    <p className="info">{comment.job}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fourth;