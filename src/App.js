import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import LoginPage from "./View/LoginPage/LoginPage";


function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>


                </Routes>
            </Router>


        </>
    );
}

export default App;
