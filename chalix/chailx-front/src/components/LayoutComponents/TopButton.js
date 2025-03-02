import React from "react";
import "../../css/TopButton.css";

const TopButton = () => {

    const backToTop = () => {
        window.scroll({
            top:0
        });
    };

    return(
        <div className="top-button">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick={backToTop}>
            <path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z"></path>
            </svg>
        </div>
    )
}
export default TopButton;