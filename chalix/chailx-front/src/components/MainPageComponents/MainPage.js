import React from "react";
import "../../css/MainPage.css";
import MainPageOverlayVideo from "./MainPageOverlayVideo";
import Intro_Department from "./Intro_Department";
import Intro_News from "./Intro_News";
import Intro_Performance from "./Intro_Performance";

const MainPage = () => {

    return(
        <div className="mainPage-container">
            <MainPageOverlayVideo/>
            <Intro_Department/>
            <Intro_News/>
            <Intro_Performance/>
        </div>
    )
}
export default MainPage;