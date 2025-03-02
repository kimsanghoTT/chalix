import React, { useEffect } from "react";
import "../../css/MainPage.css";
import gsap from "gsap";

const MainPageOverlayVideo = () => {

    useEffect(() => {
        const textElements = document.querySelectorAll(".video-overlay-text p");

        textElements.forEach((element) => {
            const chars = element.innerText.split("").map((char, index) => {
                return `<span class="char">${char}</span>`;
            }).join("");

            element.innerHTML = chars; 

            gsap.fromTo(
                element.querySelectorAll(".char"),
                {opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 0.7, ease: "power1.out", stagger: 0.1}
            );
        });
    }, []);

    return (
        <div className="video-container">
            <video src="/images/buildings.mp4" autoPlay muted loop type="video/mp4" />
            <div className="video-overlay-text">
                <p>지속 가능한 미래와 고객의 비즈니스 성공을</p>
                <p>위한 혁신적인 환경 솔루션을 제공합니다</p>
            </div>
        </div>
    );
};

export default MainPageOverlayVideo;
