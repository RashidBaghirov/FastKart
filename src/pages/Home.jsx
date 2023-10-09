import React from "react";
import Header from "../components/Header/Header";
import Specialy from "../components/Specialy/Specialy";
import BannerSection from "../components/Banners/Banners";
import Footer from "../components/Footer/Footer";
import SlickSlider from "../components/Category/Category";

function Home(){
    return(
        <>
        <Header />
        <Specialy />
        <BannerSection />
        <SlickSlider />
        <Footer />
       </>
    )
}


export default Home;