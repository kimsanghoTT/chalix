import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BoardUpdate = () => {
    const location = useLocation();
    const post = location.state;
    const navigate = useNavigate();

    const [brd_title, setBrdTitle] = useState(post.brd_title);
    const [brd_ext2, setBrdExt2] = useState(post.brd_ext2);
    const [brd_ext1, setBrdExt1] = useState(post.brd_ext1);

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
        <div>
            <h2>게시글 수정</h2>
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
                <button type="submit">수정하기</button>
            </form>
        </div>
    );
};

export default BoardUpdate;
