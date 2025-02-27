import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OverlayImage from "./OverlayImage";

const BoardUpdate = () => {
    const location = useLocation();
    const post = location.state;
    const navigate = useNavigate();

    const [brd_title, setBrd_title] = useState(post.brd_title);
    const [brd_ext2, setBrd_ext2] = useState(post.brd_ext2);
    const [brd_ext1, setBrd_ext1] = useState(post.brd_ext1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedPost = {
            ...post,
            brd_title,
            brd_ext2,
            brd_ext1,
        };

        const storedList = JSON.parse(localStorage.getItem("boardList")) || [];
        const updatedList = storedList.map(item =>
            item.brd_idx === post.brd_idx ? updatedPost : item
        );

        localStorage.setItem("boardList", JSON.stringify(updatedList));

        alert("수정 완료");
        navigate("/board");
    };

    return (
        <div className="boardPage-container">
            <OverlayImage />
            <div className="board-update-container">
                <div className="postingForm">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>학술대회명:</label>
                            <input type="text" value={brd_ext2} onChange={(e) => setBrd_ext2(e.target.value)} className="board-input" />
                        </div>
                        <div>
                            <label>논문명:</label>
                            <input type="text" value={brd_title} onChange={(e) => setBrd_title(e.target.value)} className="board-input" />
                        </div>
                        <div>
                            <label>비고:</label>
                            <input type="text" value={brd_ext1} onChange={(e) => setBrd_ext1(e.target.value)} className="board-input" />
                        </div>
                        <button type="submit" className="submit-button">수정하기</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BoardUpdate;
