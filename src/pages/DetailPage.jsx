import React from "react";
import AllFooter from "../components/LoginPage/Footer/AllFooter";
import AllHeader from "../components/LoginPage/Header/AllHeader";
import Detail from "../components/ShopDetailCM/ShopDetailCM";
import Sticky from "../components/StickyNav/Sticky";

function DetailPage() {
    return (
        <>
            <AllHeader />
            <Detail />
        <Sticky />

            <AllFooter />

        </>
    )
}


export default DetailPage;