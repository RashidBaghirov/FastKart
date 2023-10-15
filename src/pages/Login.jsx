import React from "react";
import AllFooter from "../components/LoginPage/Footer/AllFooter";
import AllHeader from "../components/LoginPage/Header/AllHeader";
import Main from "../components/LoginPage/Main/Main";
import Sticky from "../components/StickyNav/Sticky";

function Login() {
    return (
        <>
            <AllHeader />
            <Main />
        <Sticky />
            <AllFooter />

        </>
    )
}


export default Login;