import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BoardDetail = () => {
    const location = useLocation();
    const post = location.state;
    const navigate = useNavigate();

    const deletePost = () => {
        const storedList = JSON.parse(localStorage.getItem("boardList")) || [];
        const updatedList = storedList.filter(item => item.brd_idx !== post.brd_idx);

        localStorage.setItem("boardList", JSON.stringify(updatedList));
        alert("게시글이 삭제되었습니다.");
        navigate("/board");
    };

    const updatePost = () => {
        navigate(`/board/update/${post.brd_idx}`, { state: post });
    };

    return (
        <div>
            <h2>{post.brd_title}</h2>
            <p><strong>번호:</strong> {post.brd_idx}</p>
            <p><strong>학술대회명:</strong> {post.brd_ext2}</p>
            <p><strong>날짜:</strong> {post.reg_datetime}</p>
            <p><strong>비고:</strong> {post.brd_ext1}</p>

            <button onClick={updatePost}>수정</button>
            <button onClick={deletePost}>삭제</button>
        </div>
    );
};

export default BoardDetail;
