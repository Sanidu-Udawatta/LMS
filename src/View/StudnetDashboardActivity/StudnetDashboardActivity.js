import React from "react";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import HomeTitle from "../../Component/ParentDashboardHome/HedingTitle/HedingTitleHome";
import StudentNavBar from "../../Component/StudnetPageNavBar/StudentSlideNavbar/StudentNavBar";
import ActivityBody from "../../Component/StudentDashBoardActivity/ActivityButtonBar/ActivityBody";


function StudentDashboardActivity() {
    return (
        <>
            <div className="nav-bar-div">
                <StudentNavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className="body-section shadow   bg-white rounded">

                <ActivityBody/>

            </div>


        </>

    );
}

export default StudentDashboardActivity;