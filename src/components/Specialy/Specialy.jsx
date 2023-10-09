import React from "react";
import { Link } from "react-router-dom";


function Specialy() {
    return (
        <div className="spe">
            <div className="img">
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/1.jpg" alt="" />
            </div>
            <div class="container-fluid-lg">
                <div>
                    <h6 class="ls-expanded theme-color text-uppercase">Weekend Special offer
                    </h6>
                    <h1 class="heding-2">Premium Quality Dry Fruits</h1>
                    <h2 class="content-2">Dryfruits shopping made Easy</h2>
                    <h5 class="text-content">Fresh &amp; Top Quality Dry Fruits are available here!
                    </h5>
                    <button className="special_btn">Shop Now

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Specialy;