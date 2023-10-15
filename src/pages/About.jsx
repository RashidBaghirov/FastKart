import React from "react";
import AllFooter from "../components/LoginPage/Footer/AllFooter";
import AllHeader from "../components/LoginPage/Header/AllHeader";
import AboutCM from "../components/AboutsCM/AboutCm";
import Sticky from "../components/StickyNav/Sticky";

function About() {
    return (
        <>
            <AllHeader />
            <AboutCM />
            <Sticky />
            <AllFooter />

        </>
    )
}


export default About;