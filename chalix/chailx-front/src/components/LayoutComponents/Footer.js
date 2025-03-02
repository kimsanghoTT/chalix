import React from "react";
import "../../css/Footer.css";

const Footer = () => {
    return(
        <footer>
            <div className="footer-logo">
                <img src="/images/logo2.png"/>
            </div>
            <div className="footer-modal">
                <div>
                    개인정보처리방침
                </div>
            </div>
            <div className="footer-info">
                <div>
                    <span>사업자명: 홍길동</span>
                    &nbsp;
                    <span>|</span>
                    &nbsp;
                    <span>대표자명: 홍길동</span>
                    &nbsp;
                    <span>|</span>
                    &nbsp;
                    <span>팩스: 02-1234-5678</span>
                    &nbsp;
                    <span>|</span>
                    &nbsp;
                    <span>주소: 서울 서초구 서초대로77길 39, 10층</span>
                    &nbsp;
                    <span>|</span>
                    &nbsp;
                    <span>대표전화: 010-1234-5678</span>
                    &nbsp;
                    <span>|</span>
                    &nbsp;
                    <span>사업자등록번호: 123-45-67890</span>
                    &nbsp;
                    <span>|</span>
                    &nbsp;
                </div>
            </div>
        </footer>
    )
}
export default Footer;