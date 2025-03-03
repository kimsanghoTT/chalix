import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/MainPage.css";

gsap.registerPlugin(ScrollTrigger);

const Intro_Patterns = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".red-pattern-detail p, .blue-pattern-detail p");

    textElements.forEach((element) => {
      const chars = element.innerText.split("").map((char, index) => {
        return `<span class="char">${char}</span>`;
      }).join("");

      element.innerHTML = chars; 

      gsap.fromTo(
        element.querySelectorAll(".char"), 
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power1.out",
          stagger: 0.05, 
          scrollTrigger: {
            trigger: element, 
            start: "top 80%", 
            end: "bottom top", 
            scrub: false, 
            once: true, 
          },
        }
      );
    });
  }, []);

  return (
    <div className="check-pattern-container">
      <ul className="check-pattern-grid">
        <li>
          <div className="pattern-content-red">
            <div className="red-pattern-title">
              <p>Latest News</p>
            </div>
            <div className="red-pattern-detail">
              <p>순환경제사회법 시행령 일부개정령안 입법예고</p>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div className="pattern-content-blue">
            <div className="pattern-icon">
              <img src="/images/2-1.png" alt="pattern-icon" />
            </div>
            <div className="blue-pattern-detail">
              <p>신뢰와 정확성을 바탕으로하는 카이트 엔지니어링</p>
            </div>
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <div className="pattern-content-blue">
            <div className="pattern-icon">
              <img src="/images/2-2.png" alt="pattern-icon" />
            </div>
            <div className="blue-pattern-detail">
              <p>신뢰와 정확성을 바탕으로하는 카이트 엔지니어링</p>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div className="pattern-content-blue">
            <div className="pattern-icon">
              <img src="/images/2-3.png" alt="pattern-icon" />
            </div>
            <div className="blue-pattern-detail">
              <p>고객 맞춤형 솔루션 제공</p>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div className="pattern-content-blue">
            <div className="pattern-icon">
              <img src="/images/2-4.png" alt="pattern-icon" />
            </div>
            <div className="blue-pattern-detail">
              <p>신뢰와 정확성을 바탕으로하는 카이트 엔지니어링</p>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <div className="pattern-content-blue">
            <div className="pattern-icon">
              <img src="/images/2-5.png" alt="pattern-icon" />
            </div>
            <div className="blue-pattern-detail">
              <p>고객 맞춤형 솔루션 제공</p>
            </div>
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <div className="pattern-content-red">
            <div className="red-pattern-shortcut">
              <p>바로가기</p>
            </div>
            <div className="red-pattern-icon">
              <p>↗</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Intro_Patterns;
