import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import TopButton from "./components/TopButton";
import ".//App.css";


function App() {
  return (
    <div>
      <img src="/images/2(1).png" style={{width: "100%"}}/>
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
