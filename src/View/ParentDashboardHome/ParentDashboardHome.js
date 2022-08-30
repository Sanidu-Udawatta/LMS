import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import "./ParentDashBoardHome.css"
import HomeBody from "../../Component/ParentDashboardHome/HomeBody/HomeBody";

function ParentDashboardHome() {
    return (
        <>
            <div className="nav-bar-div">
                <NavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className="body-section shadow   bg-white rounded">
                <HomeBody/>
            </div>




        </>

    );
}

export default ParentDashboardHome;