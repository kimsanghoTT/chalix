import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from "./components/MainPageComponents/MainPage";
import Header from "./components/LayoutComponents/Header";
import Footer from "./components/LayoutComponents/Footer";
import Board from "./components/BoardComponents/Board";
import TopButton from "./components/LayoutComponents/TopButton";
import BoardDetail from "./components/BoardComponents/BoardDetail";
import BoardUpload from "./components/BoardComponents/BoardUpload";
import BoardUpdate from "./components/BoardComponents/BoardUpdate";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/:brd_idx' element={<BoardDetail />} />
          <Route path='/board/upload' element={<BoardUpload />} />
          <Route path='/board/update/:brd_idx' element={<BoardUpdate/>}/>
        </Routes>
        <TopButton />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
