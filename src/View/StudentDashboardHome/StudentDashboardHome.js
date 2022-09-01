import React from "react";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import HomeTitle from "../../Component/ParentDashboardHome/HedingTitle/HedingTitleHome";
import HomeAnimation from "../../Component/ParentDashboardHome/HomeAnimation/HomeAnimation";
import StudentNavBar from "../../Component/StudnetPageNavBar/StudentSlideNavbar/StudentNavBar";


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
                    <HomeTitle/>
                </div>


                <div className="home-animation-div">
                    <HomeAnimation/>
                </div>



            </div>


        </>

    );
}

export default StudentDashboardHome;