import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BoardOverlayImage from "./BoardOverlayImage";
import moment from "moment";
import "../../css/Board.css";

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

    const timeFormat = (time) => {
        return moment(time).format("YYYY-MM-DD");
    }

    return (
        <div className="boardPage-container">
            <BoardOverlayImage />
            <div className="board-detail-container">
                <div className="posting-form">
                    <h1>{post.brd_title}</h1>
                    <div className="detail-container">
                        <div className="items">
                            <div>번호:</div>
                            <div>대회명:</div>
                            <div>날짜:</div>
                            <div>비고:</div>
                        </div>
                        <div className="details">
                            <div>{post.brd_idx}</div>
                            <div>{post.brd_ext2}</div>
                            <div>{timeFormat(post.reg_datetime)}</div>
                            <div>{post.brd_ext1}</div>
                        </div>
                    </div>

                    <div className="button-group">
                        <button onClick={updatePost} className="update-button">수정</button>
                        <button onClick={deletePost} className="delete-button">삭제</button>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default BoardDetail;
