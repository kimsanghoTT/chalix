import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoardPage from "./components/BoardPage";
import TopButton from "./components/TopButton";
import BoardDetail from "./components/BoardDetail";
import BoardUpload from "./components/BoardUpload";
import BoardUpdate from "./components/BoardUpdate";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/board' element={<BoardPage />} />
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
