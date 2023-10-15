import React from "react";
import { Link } from "react-router-dom";
import First from "./FirstSection/First";
import Second from "./SecondSection/Second";
import Third from "./ThirdSection/Third";
import Fifth from "./FifthSection/Fifth";
import Fourth from "./FourthSection/Fourth";

function AboutCM(){
    return(
        <>
        <section id="about">
            <First />
            <Second />
            <Third />
            <Fifth />
            <Fourth />
        </section>
        </>
    )
}


export default AboutCM ;