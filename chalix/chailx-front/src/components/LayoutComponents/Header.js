import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Header.css";
import gsap from 'gsap';

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);  
    const [lastScroll, setLastScroll] = useState(0); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setIsScrolled(currentScroll); 
            setLastScroll(currentScroll);
            if(currentScroll <= lastScroll){
                setIsVisible(true);
            }
            else{
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // cleanup
    }, [lastScroll]);

    const mouseHover = () => {
        setIsHovered(true);
        gsap.to(".header-container", { backgroundColor: "white", color: "black", duration: 0.5 });
        gsap.to(".menu-title a", { color: "black", duration: 0.5 });
        gsap.to(".contact a", { color: "black", duration: 0.5 });
        gsap.to(".contact", { borderColor: "black", duration: 0.5 });

        gsap.to(".menu-lists", {
            duration: 0.5, height: "200px", opacity: 1, ease: "power1.out"
        });
    };

    const mouseLeave = () => {
        setIsHovered(false);
        gsap.to(".header-container", { backgroundColor: "transparent", color: "white", duration: 0.5 });
        gsap.to(".menu-title a", { color: "white", duration: 0.5 });
        gsap.to(".contact a", { color: "white", duration: 0.5 });
        gsap.to(".contact", { borderColor: "white", duration: 0.5 });

        gsap.to(".menu-lists", {
            duration: 0.5, height: 0, opacity: 0, ease: "power1.in"
        });
    };

    useEffect(() => {
        if (!isHovered) {
            gsap.to(".header-container", { backgroundColor: "transparent", color: "white", duration: 0.5 });
            gsap.to(".menu-title a", { color: "white", duration: 0.5 });
            gsap.to(".contact a", { color: "white", duration: 0.5 });
            gsap.to(".contact", { borderColor: "white", duration: 0.5 });
        }
        if (isVisible) {
            gsap.to(".header-container", { backdropFilter: "blur(50px) brightness(0.7)", duration: 0.5 });
        }
    }, [isScrolled, isHovered, isVisible]);

    return (
        <header 
            className={`header-container ${isVisible ? 'visible' : 'hidden'}`} 
            onMouseEnter={mouseHover} 
            onMouseLeave={mouseLeave}
        >
            <nav>
                <div className="header-logo">
                    <Link to="/"><img src="/images/logo2.png" alt="Logo" /></Link>
                </div>
                <ul className="menu">
                    <li className="submenu">
                        <div className="menu-title">
                            <a href="/">WHO WE ARE</a>
                        </div>
                        <ul className={`menu-lists ${isHovered ? 'show' : ''}`} style={{borderRight:"1px solid #aaaaaa", borderLeft:"1px solid #aaaaaa"}}>
                            <li className="content"><Link to="/">CAIT VALUE</Link></li>
                            <li className="content"><Link to="/">CEO 메시지</Link></li>
                            <li className="content"><Link to="/">연혁</Link></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <div className="menu-title">
                            <a href="/">WHAT WE CAN</a>
                        </div>
                        <ul className={`menu-lists ${isHovered ? 'show' : ''}`} style={{borderRight:"1px solid #aaaaaa"}}>
                            <li className="content"><Link to="/">컨설팅부</Link></li>
                            <li className="content"><Link to="/">글로벌연구센터</Link></li>
                            <li className="content"><Link to="/">정책연구부</Link></li>
                            <li className="content"><Link to="/">기술개발부</Link></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <div className="menu-title">
                            <a href="/">WHAT WE DO</a>
                        </div>
                        <ul className={`menu-lists ${isHovered ? 'show' : ''}`} style={{borderRight:"1px solid #aaaaaa"}}>
                            <li className="content"><Link to="/">사업실적</Link></li>
                            <li className="content"><Link to="/board">발표논문</Link></li>
                            <li className="content"><Link to="/">NEWS</Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="contact">
                    <Link to="/">CONTACT</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
