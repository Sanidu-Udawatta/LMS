import React from "react";
import "./StudentDashboardHome.css"
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import StudentNavBar from "../../Component/StudnetPageNavBar/StudentSlideNavbar/StudentNavBar";
import StudentHomeTitle from "../../Component/StudentDashboardHome/HedingTitle/StudentHeadingTitleHome";
import StudentHomeAnimation from "../../Component/StudentDashboardHome/HomeAnimation/StudentHomeAnimation";
import ActivityButton from "../../Component/StudentDashboardHome/ActivityButton/StudentActivityBotton";


function StudentDashboardHome() {
    return (
        <>
            <div className="nav-bar-div">
                <StudentNavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className="body-section shadow   bg-white rounded">
                <div className="home-title">
                    <StudentHomeTitle/>
                </div>


                <div className="home-animation-div">
                    <StudentHomeAnimation/>
                </div>
                <div className="do-activity">
                    <ActivityButton/>
                </div>


            </div>


        </>

    );
}

export default StudentDashboardHome;