import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css";
import gsap from 'gsap';

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true); 
    const [isVisible, setIsVisible] = useState(true);  
    const [lastScrollY, setLastScrollY] = useState(0); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            if (currentScrollY > 10) {
                setIsScrolled(true); 
            } else {
                setIsScrolled(false); 
            }

            if (currentScrollY > lastScrollY) {
                setIsVisible(false); 
            } else {
                setIsVisible(true); 
            }

            setLastScrollY(currentScrollY);  
        };

        window.addEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const mouseHover = () => {
        setIsHovered(true);
        gsap.to(".header-container", { backgroundColor: "white", color: "black", duration: 0.5 });
        gsap.to(".menu-title a", { color: "black", duration: 0.5 });
        gsap.to(".contact a", { color: "black", duration: 0.5 });
        gsap.to(".contact", { borderColor: "black", duration: 0.5 });
    };

    const mouseLeave = () => {
        setIsHovered(false);

            gsap.to(".header-container", { backgroundColor: "transparent", duration: 0.5 });
            gsap.to(".menu-title a", { color: "white", duration: 0.5 });
            gsap.to(".contact a", { color: "white", duration: 0.5 });
            gsap.to(".contact", { borderColor: "white", duration: 0.5 });

    };

    useEffect(() => {
        if (isScrolled && isVisible) {
            gsap.to(".header-container", { backdropFilter: "blur(5px)", color: "white", duration: 0.5 });  
            gsap.to(".menu-title a", { color: "white", duration: 0.5 });
            gsap.to(".contact a", { color: "white", duration: 0.5 });
            gsap.to(".contact", { borderColor: "white", duration: 0.5 });
        } else {
            if (isAtTop && !isHovered && isVisible) {
                gsap.to(".header-container", { backgroundColor: "transparent", color: "white", duration: 0.5 });
                gsap.to(".menu-title a", { color: "white", duration: 0.5 });
                gsap.to(".contact a", { color: "white", duration: 0.5 });
                gsap.to(".contact", { borderColor: "white", duration: 0.5 });
            }
        }
    }, [isScrolled, isHovered, isAtTop, isVisible]);

    useEffect(() => {
        if (isAtTop && !isHovered && isVisible) {
            gsap.to(".header-container", { backgroundColor: "transparent", color: "white", duration: 0.5 });
            gsap.to(".menu-title a", { color: "white", duration: 0.5 });
            gsap.to(".contact a", { color: "white", duration: 0.5 });
            gsap.to(".contact", { borderColor: "white", duration: 0.5 });
        }
    }, [isAtTop]);

    return (
        <header 
            className={`header-container ${isScrolled && !isAtTop ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`} 
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
                        <ul className={`menu-lists ${isHovered ? 'show' : ''}`}>
                            <li className="content"><Link to="/">CAIT VALUE</Link></li>
                            <li className="content"><Link to="/">CEO 메시지</Link></li>
                            <li className="content"><Link to="/">연혁</Link></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <div className="menu-title">
                            <a href="/">WHAT WE CAN</a>
                        </div>
                        <ul className={`menu-lists ${isHovered ? 'show' : ''}`}>
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
                        <ul className={`menu-lists ${isHovered ? 'show' : ''}`}>
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
