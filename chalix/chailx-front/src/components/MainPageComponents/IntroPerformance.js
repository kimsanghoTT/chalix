import React, { useEffect } from "react";
import "../../css/MainPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro_Performance = () => {

    useEffect(() => {
        const images = document.querySelectorAll(".performance-images img");

        gsap.fromTo(".performance-container", { backgroundColor: "white" }, {
            backgroundColor: "rgb(29, 29, 29)", duration: 3,
            scrollTrigger: {
                trigger: ".performance-container",
                start: "top 50%",
                end: "bottom bottom",
                scrub: 2,
                duration: 1
            }
        }
        );

        gsap.fromTo(images[4], { y: 1000, opacity: 0 }, {
            y: -1000, opacity: 1, duration: 1.5, scrub: 1,
            scrollTrigger: {
                trigger: ".performance-container",
                start: "top 50%",
                end: "bottom 90%",
                position: "absolute",
                scrub: 2
            }
        }
        );

        gsap.fromTo(images[2], { y: 1000, opacity: 0 }, {
            y: -1000, opacity: 1, duration: 1.5, scrub: 1,
            scrollTrigger: {
                trigger: ".performance-container",
                start: "top 40%",
                end: "bottom 90%",
                position: "absolute",
                scrub: 2
            }
        }
        );


        gsap.fromTo(images[1], { y: 1000, opacity: 0 }, {
            y: -1000, opacity: 1, duration: 1.5, scrub: 1,
            scrollTrigger: {
                trigger: ".performance-container",
                start: "top 30%",
                end: "bottom bottom",
                position: "absolute",
                scrub: 2
            }
        }
        );

        gsap.fromTo(images[0], { y: 1000, opacity: 0 }, {
            y: -1000, opacity: 1, duration: 2.5, scrub: 1,
            scrollTrigger: {
                trigger: ".performance-container",
                start: "top 20%",
                end: "bottom bottom",
                position: "absolute",
                scrub: 2
            }
        }
        );

        gsap.fromTo(images[3], { y: 1000, opacity: 0 }, {
            y: -1000, opacity: 1, duration: 3, scrub: 1,
            scrollTrigger: {
                trigger: ".performance-container",
                start: "top 10%",
                end: "bottom bottom",
                position: "absolute",
                scrub: 2
            }
        }
        );

        gsap.fromTo(images[5], 
            { opacity: 0, scale: 0 }, 
            {
                opacity: 1, scale: 1, duration: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: ".performance-container",
                    start: "top top",  
                    end: "bottom bottom",  
                    scrub: 2,  
                    onEnter: () => {
                        gsap.to(images[5], {
                            position: "absolute",
                            top: "50%",  
                            left: "50%",
                            transform: "translate(-50%, -50%)", 
                            width: "100%",   
                            height: "100%", 
                            objectFit: "cover",  
                            zIndex: 1000,  
                            filter: "brightness(0.6)", 
                            duration: 1,   
                            ease: "power2.out"
                        });
                    }
                }
            }
        );
    }, []);

    return (
        <div className="performance-container">
            <div className="performance-images">
                <img src="/images/5(1).png" alt="5(1)" />
                <img src="/images/4(1).png" alt="4(1)" />
                <img src="/images/1(1).png" alt="1(1)" />
                <img src="/images/3(1).png" alt="3(1)" />
                <img src="/images/2(1).png" alt="2(1)" />
                <img src="/images/1(1).png" alt="1(1)" />
            </div>
            <div className="performance-overlay-text">
                <p>Environmental consultancy firm offering high-value advisory services</p>
                <button>사업실적 &nbsp;&nbsp;→</button>
            </div>
        </div>
    );
};

export default Intro_Performance;
