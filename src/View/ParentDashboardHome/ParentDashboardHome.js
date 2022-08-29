import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentDashboardHome/PHomeComponent";
import "./ParentDashBoardHome.css"

function ParentDashboardHome() {
    return (
        <>
            <div className="nav-bar-div">
                <NavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>

            </div>




        </>

    );
}

export default ParentDashboardHome;