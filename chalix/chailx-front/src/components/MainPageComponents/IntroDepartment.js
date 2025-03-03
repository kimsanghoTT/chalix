import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "../../css/MainPage.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Intro_Department = () => {

    useEffect(() => {
        gsap.fromTo(".intro-mention", { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".intro-mention",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: false,
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(".depart-explain", { width: "42%" },  
            {
                width: "24%",    
                duration: 1,
                scrollTrigger: {
                    trigger: ".depart-explain", 
                    start: "top 60%",
                    end: "top 50%r",
                    scrub: 5,
                    markers: false,
                },
            }
        );

    }, []);

    return (
        <div className="department-container">
            <div className="intro-mention">
                <h2>Our Expertise</h2>
                <p>깊이 있는 전문 지식으로</p>
                <p>지속 가능한 미래를 설계합니다</p>
            </div>
            <div className="depart-images-container">
                <div className="depart-explain">
                    <img src="/images/scale1.jpg" alt="scale1"/>
                    <h2>컨설팅부</h2>
                    <p>
                        다양한 경험과 노하우를 바탕으로 기후변화 대응 최적전략 수립 및 탄소배출권 관리
                        및 국가와 기업의 경졍령을 고취합니다
                    </p>
                </div>
                <div className="depart-explain">
                    <img src="/images/scale2.jpg" alt="scale2"/>
                    <h2>글로벌연구센터</h2>
                    <p>
                        기후변화 대응 및 ESG 경영 선도를 위해 국제개발협력, 정책연구,
                        신재생에너지 및 탄소감축 사업 등 다양한 현지 맞춤형 솔루션을 제공합니다
                    </p>
                </div>
                <div className="depart-explain">
                    <img src="/images/scale3.jpg" alt="scale3"/>
                    <h2>정책연구부</h2>
                    <p>
                        국가, 지방자치단체, 사업장 등이 환경분야 및 기후변화에 선도적으로 대응할 수 있도록
                        정책 개발 및 대안을 마련합니다
                    </p>
                </div>
                <div className="depart-explain">
                    <img src="/images/scale4.jpg" alt="scale4"/>
                    <h2>기술개발부</h2>
                    <p>
                        세균 및 바이러스 제거, 지속적인 효과, 환경 친화적인 항균 · 항바이러스 나노물질의 개발로
                        새로운 제품과 서비스를 제공합니다
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Intro_Department;
