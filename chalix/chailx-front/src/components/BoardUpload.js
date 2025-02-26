import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardUpload = () => {
    const [brd_title, setBrdTitle] = useState("");
    const [brd_ext2, setBrdExt2] = useState("");
    const [brd_ext1, setBrdExt1] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            brd_idx: new Date().getTime(), 
            brd_title,
            brd_ext2,
            brd_ext1,
            reg_datetime: new Date().toISOString(), 
        };

        const storedList = JSON.parse(localStorage.getItem("boardList")) || [];
        storedList.push(newPost);

        localStorage.setItem("boardList", JSON.stringify(storedList));

        alert("게시글이 추가되었습니다.");
        navigate("/board");
    };

    return (
        <div>
            <h2>새 게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>학술대회명:</label>
                    <input
                        type="text"
                        value={brd_ext2}
                        onChange={(e) => setBrdExt2(e.target.value)}
                    />
                </div>
                <div>
                    <label>논문명:</label>
                    <input
                        type="text"
                        value={brd_title}
                        onChange={(e) => setBrdTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>비고:</label>
                    <input
                        type="text"
                        value={brd_ext1}
                        onChange={(e) => setBrdExt1(e.target.value)}
                    />
                </div>
                <button type="submit">작성하기</button>
            </form>
        </div>
    );
};

export default BoardUpload;
