import React from "react";
import Board from "./Board";
import "../css/Board.css";

const BoardPage = () => {

    return(
        <div className="board-container">
            <div className="image-container">

            </div>
            <div>
            <Board/>
            </div>
            
        </div>
    )
}
export default BoardPage;