import React from "react";
import "../../css/MainPage.css";
import MainPageOverlayVideo from "./MainPageOverlayVideo";
import IntroDepartment from "./IntroDepartment";
import IntroPatterns from "./IntroPatterns";
import IntroPerformance from "./IntroPerformance";

const MainPage = () => {

    return(
        <div className="mainPage-container">
            <MainPageOverlayVideo/>
            <IntroDepartment/>
            <IntroPatterns/>
            <IntroPerformance/>
        </div>
    )
}
export default MainPage;