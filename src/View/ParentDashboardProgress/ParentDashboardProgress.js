import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import ProgressBody from "../../Component/ParentDashboardProgress/ProgressBody/ProgressBody";
function ParentDashboardProgress() {
    return (
        <>
            <div className="nav-bar-div">
                <NavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className=" body-section shadow   bg-white rounded">
                <ProgressBody/>
            </div>

        </>

    );
}

export default ParentDashboardProgress;