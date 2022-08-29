import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import LoginPage from "./View/LoginPage/LoginPage";
import ParentDashboardHome from "./View/ParentDashboardHome/ParentDashboardHome";


function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/parent-dashboard-home" element={<ParentDashboardHome/>}/>

                </Routes>
            </Router>



        </>
    );
}

export default App;
