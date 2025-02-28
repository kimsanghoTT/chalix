import moment from "moment";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import OverlayImage from "./OverlayImage";
import gsap from "gsap";

const BoardUpload = () => {
    const [brd_title, setBrd_title] = useState("");
    const [brd_ext2, setBrd_ext2] = useState("");
    const [brd_ext1, setBrd_ext1] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(brd_ext2 === '' || brd_title === '' || brd_ext1 === ''){
            alert("모든 항목을 작성해주세요.");
            return;
        }

        const storedList = JSON.parse(localStorage.getItem("boardList")) || [];

        const newPost = {
            brd_idx: Math.max(...storedList.map(post => post.brd_idx)) + 1,
            brd_title,
            brd_ext2,
            brd_ext1,
            reg_datetime: moment().format("YYYY-MM-DD"),
        };

        storedList.push(newPost);
        localStorage.setItem("boardList", JSON.stringify(storedList));

        alert("게시글이 추가되었습니다.");
        navigate("/board");
    };

    return (
        <div className="boardPage-container">
            <OverlayImage />
            <div className="board-upload-container">
                <div className="posting-form">
                    <h1 style={{color:"#111111"}}>논문 추가</h1>
                    <form onSubmit={handleSubmit}>
                        <table className="posting-table">
                            <tr>
                                <td>
                                    <input type="text" value={brd_ext2}
                                        onChange={(e) => setBrd_ext2(e.target.value)} 
                                        className="board-input" placeholder="학술대회명" />
                                </td>
                                <td>
                                    <input type="text" value={brd_title}
                                        onChange={(e) => setBrd_title(e.target.value)} 
                                        className="board-input" placeholder="논문명" />
                                </td>
                                <td>
                                    <input type="text" value={brd_ext1}
                                        onChange={(e) => setBrd_ext1(e.target.value)} 
                                        className="board-input" placeholder="비고(국내/해외)" />
                                </td>
                            </tr>
                        </table>
                        <button type="submit" className="submit-button">추가</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BoardUpload;
