import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <>
                <div className="login">
                <div className="container-fluid">
                <div className="row caption">
                    <div className="col-10 title">
                        <div className="tit">
                            <p>Log in</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="icon-word">
                            <div className="icon">
                                <Link to="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-house-door-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="log">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-chevron-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                                Log in
                            </div>
                        </div>
                    </div>
                </div>

                <div className="image-logIn">
                    <div className="row">
                        <div className="col-7">
                            <div className="image">
                                <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/log-in.png"
                                    alt="Log in"
                                />
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="signIn">
                                <div className="title">
                                    <p className="head3">Welcome To Fastkart</p>
                                    <p className="par">Log In Your Account</p>
                                </div>
                                <div className="form">
                                    <form action="">
                                        <input
                                            className="text"
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email Address"
                                        />
                                        <br />
                                        <input
                                            className="text"
                                            type="password"
                                            name="pass"
                                            id="pass"
                                            placeholder="Password"
                                        />
                                        <br />
                                        <label htmlFor="remember" className="remember">
                                            <input type="checkbox" name="remember" id="remember" />
                                            Remember me
                                        </label>

                                        <label className="account-forgot">
                                            <Link>Forgot Password?</Link>
                                        </label>

                                        <div className="button">
                                            <button
                                                className="btn btn-danger"
                                                type="submit"
                                                name="btn"
                                                id="btn"
                                            >
                                                Log in
                                            </button>
                                        </div>
                                    </form>

                                    <div className="google-facebook">
                                        <p className="or">or</p>
                                        <div className="LoginWith">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-google"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                </svg>
                                            </div>
                                            <div className="with">
                                                <p>Log in with Google</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="google-facebook">
                                        <div className="LoginWith">
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-facebook"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </div>
                                            <div className="with">
                                                <p>Log in with Facebook</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="forgot">
                                        <p>Don't have an account?</p>
                                        <p className="signup">
                                            <Link>Sign Up</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
        </>
    );
}

export default Main;