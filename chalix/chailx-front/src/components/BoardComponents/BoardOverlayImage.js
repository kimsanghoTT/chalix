import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/Board.css";
import gsap from "gsap";


const BoardOverlayImage = () => {
    const RecentPage = useLocation();

    useEffect(() => {
        gsap.fromTo(".board-overlay-text p", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power1.out" });
    }, []);

    return (
        <div className="image-container">
            <img src="/images/building.jpg" alt="Building" />
            <div className="board-overlay-text">
                <p>Driving innovation</p>
                <p>with impactful research</p>
            </div>
            <div className="board-overlay-link">
                <div className={`overlay-link-text ${RecentPage.pathname === "/" ? "bold" : ""}`}><Link to="#">사업실적</Link></div>
                <div className={`overlay-link-text ${RecentPage.pathname === "/board" ? "bold" : ""}`}><Link to="/board">발표논문</Link></div>
                <div className={`overlay-link-text ${RecentPage.pathname === "/" ? "bold" : ""}`}><Link to="#">NEWS</Link></div>
            </div>
        </div>
    );
};

export default BoardOverlayImage;
