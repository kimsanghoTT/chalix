import moment, { now } from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OverlayImage from "./OverlayImage";

const BoardUpload = () => {
    const [brd_title, setBrd_title] = useState("");
    const [brd_ext2, setBrd_ext2] = useState("");
    const [brd_ext1, setBrd_ext1] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

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
                        <button type="submit" className="submit-button">추가</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BoardUpload;
