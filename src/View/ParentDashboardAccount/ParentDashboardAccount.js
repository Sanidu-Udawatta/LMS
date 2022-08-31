import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import AccountTitle from "../../Component/ParentDashboardAccount/HeadingTitle/HeadingTitle";
import AccountBody from "../../Component/ParentDashboardAccount/AccountBody/AccountBody";
import "./ParentDashboardAccount.css"

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

                <div className="account-body-main">
                    <AccountBody/>
                </div>

            </div>

        </>

    );
}

export default ParentDashboardAccount;