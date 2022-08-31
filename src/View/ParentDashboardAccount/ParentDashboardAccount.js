import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import HomeBody from "../../Component/ParentDashboardProgress/ProgressBody/ProgressBody";
import AccountTitle from "../../Component/ParentDashboardAccount/HeadingTitle/HeadingTitle";

function ParentDashboardAccount() {
    return (
        <>
            <div className="nav-bar-div">
                <NavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className="body-section shadow   bg-white rounded">
                <AccountTitle/>

            </div>

        </>

    );
}

export default ParentDashboardAccount;