import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import TopButton from "./components/TopButton";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes path='/' element={<Main/>}/>
        <Routes path='/board' element={<Board/>}/>
        <TopButton/>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
