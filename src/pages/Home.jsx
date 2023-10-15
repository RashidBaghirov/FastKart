import React from "react";
import Header from "../components/Header/Header";
import Specialy from "../components/Specialy/Specialy";
import BannerSection from "../components/Banners/Banners";
import Footer from "../components/Footer/Footer";
import SlickSlider from "../components/Category/Category";
import Vegetables from "../components/Vegetables/Vegetable";
import Bank from "../components/Bank/Bank";
import BestSeller from "../components/BestSeller/BEstSeller";
import Breakfast from "../components/Breakfast/Breakfast";
import Chemistry from "../components/Chemistry/Chemistry";
import Adverts from "../components/Adverts/Adverts";
import Drinks from "../components/Drinks/Drinks";
import Grocery from "../components/Grocery/Grocery";
import SafeDelivery from "../components/SafeDelivery/SafeDelivery";
import Coffee from "../components/Coffee/Coffee";
import Kitchen from "../components/Kitchen/Kitchen";
import BlogComponent from "../components/BlogComponent/BlogComponent";
import ServiceComponent from "../components/ServiceComponent/Service";
import Sticky from "../components/StickyNav/Sticky";
function Home(){
    return(
        <>
        <Header />
        <Specialy />
        <BannerSection />
        <SlickSlider />
        <Vegetables />
        <Bank />
        <BestSeller />
        <Breakfast />
        <Chemistry />
        <Adverts />
        <Drinks />
        <Grocery />
        <SafeDelivery />
        <Coffee />
        <Kitchen />
        <BlogComponent />
        <ServiceComponent />
        <Sticky />

        <Footer />

       </>
    )
}


export default Home;