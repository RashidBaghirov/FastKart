import React from "react";
import AllFooter from "../components/LoginPage/Footer/AllFooter";
import AllHeader from "../components/LoginPage/Header/AllHeader";
import ShopCm from "../components/ShopComponents/ShopCm";
import Sticky from "../components/StickyNav/Sticky";

function Shop() {
    return (
        <>
            <AllHeader />
            <ShopCm />
            <Sticky />
            <AllFooter />

        </>
    )
}


export default Shop;