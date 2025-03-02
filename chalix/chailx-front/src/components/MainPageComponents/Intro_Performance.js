import React from "react";
import "../../css/MainPage.css";

const Intro_Performance = () => {

    return(
        <div className="performance-container">
            <div className="performance-images">
                <img src="/images/5(1).png"/>
                <img src="/images/4(1).png"/>
                <img src="/images/1(1).png"/>
                <img src="/images/3(1).png"/>
                <img src="/images/2(1).png"/>
            </div>
            <div className="performance-overlay-text">
                <p>Environmental consultancy firm
                offering high-value advisory services</p>
                <button>사업실적 &nbsp;&nbsp;→</button>
            </div>
        </div>
    )
}
export default Intro_Performance;