import React from "react";
import { Link } from "react-router-dom";




function SafeDelivery(){
    return(
        <>
        <div className="safety">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="image">
                            <img src="/image/Screenshot 2023-10-10 225119.png" alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="image" style={{display:"flex",alignItems:"end"}}>
                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/grocery/banner/9.jpg" style={{ height: "320px" }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default SafeDelivery;