import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("boardList"));

        if (!storedList || storedList.length === 0) {
            const fetchData = async () => {
                const response = await axios.get("/chalix.json");
                const data = response.data.list;
                localStorage.setItem("boardList", JSON.stringify(data));
                setBoardList(data);

            };

            fetchData();
        }
        else {
            setBoardList(storedList);
        }
    }, []);

    const date = (datetime) => {
        return moment(datetime).format("YYYY-MM-DD");
    };

    const createPost = () => {
        navigate("/board/boardUpload");
    };

    return (
        <div className="board-container">
            <h1>게시판</h1>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>학술대회명</th>
                        <th>논문명</th>
                        <th>날짜</th>
                        <th>비고(국내/해외)</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((post) => (
                        <tr key={post.brd_idx}>
                            <td>{post.brd_idx}</td>
                            <td>{post.brd_ext2}</td>
                            <td>
                                <Link to={`/board/${post.brd_idx}`} state={post}>
                                    {post.brd_title}
                                </Link>
                            </td>
                            <td>{date(post.reg_datetime)}</td>
                            <td>{post.brd_ext1}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={createPost}>글쓰기</button>
        </div>
    );
};

export default Board;
