import React from 'react';
import Time from "../../ParentPageNavBar/Time/Time";
import logo from "../../../Assets/logo.png"
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import homes from "../../../Assets/NavBar/home.png"
import notification from "../../../Assets/NavBar/bell.png"
import progress from "../../../Assets/NavBar/diary.png"
import { Link, useLocation } from "react-router-dom";


function StudentNavBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}} className="">
            <CDBSidebar textColor="#fff" backgroundColor="#A35877" className="main-div">
                <div className=" ">
                    <CDBSidebarHeader className="slide-icon"
                                      prefix={<i className="fa fa-bars fa-large slide-icon slide-icon"></i>}>
                        <a href="/parent-dashboard-home" className="text-decoration-none " style={{color: 'inherit'}}>
                            SIPHALA
                        </a>
                    </CDBSidebarHeader>
                    <CDBSidebarHeader className="slide-1">
                        <img src={logo} alt="logo" className="logo-slide-bar"/>

                        <a href="/parent-dashboard-home" className="text-decoration-none title-name"
                           style={{color: 'inherit'}}>
                            SIPHALA
                        </a>
                    </CDBSidebarHeader>
                </div>


                <CDBSidebarContent className="sidebar-content set-possession">
                    <CDBSidebarMenu>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">

                            {/*<a className="nav-link active nav-bar-link" id="v-pills-home-tab"*/}
                            {/*   href="/parent-dashboard-home"*/}
                            {/*   role="tab" aria-controls="v-pills-home" aria-selected="true">*/}
                            {/*className="nav-link active nav-bar-link"*/}
                            <Link to={"/student-dashboard-home"}
                                  className={
                                      currentPath.includes("student-dashboard-home" )
                                          ? "nav-link active nav-bar-link"
                                          : "nav-link nav-bar-link"
                                  }role="tab"
                                  aria-controls="v-pills-home" aria-selected="true" >

                                <img src={homes} alt="home-icon" className="icon-nav-bar"/>

                                <CDBSidebarMenuItem className="item">

                                    Home
                                </CDBSidebarMenuItem>
                            </Link>
                            {/*</a>*/}
                            {/*data-toggle="pill"*/}
                            {/*<a className="nav-link nav-bar-link" id="v-pills-profile-tab" data-toggle="pill"*/}
                            {/*   href="/home"*/}
                            {/*   role="tab" aria-controls="v-pills-profile" aria-selected="false">*/}
                            {/*    <img src={progress} alt="home-icon" className="icon-nav-bar"/>*/}

                            {/*    <CDBSidebarMenuItem className="item">*/}

                            {/*        Progress*/}
                            {/*    </CDBSidebarMenuItem>*/}
                            {/*</a>*/}
                            <Link to={"/student-dashboard-activity"} className={
                                currentPath.includes("student-dashboard-activity" )
                                    ? "nav-link active nav-bar-link"
                                    : "nav-link nav-bar-link"
                            }role="tab"
                                  aria-controls="v-pills-home" aria-selected="true" >
                                <img src={progress} alt="home-icon" className="icon-nav-bar"/>

                                <CDBSidebarMenuItem className="item">

                                    Activities
                                </CDBSidebarMenuItem>
                            </Link>

                            {/*<a className="nav-link nav-bar-link" id="v-pills-messages-tab" data-toggle="pill"*/}
                            {/*   href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"*/}
                            {/*   aria-selected="false">*/}
                            {/*    <img src={notification} alt="home-icon" className="icon-nav-bar"/>*/}

                            {/*    <CDBSidebarMenuItem className="item">*/}

                            {/*        Notification*/}
                            {/*    </CDBSidebarMenuItem>*/}
                            {/*</a>*/}

                            <Link to={"/student-dashboard-account"} className={
                                currentPath.includes("student-dashboard-account" )
                                    ? "nav-link active nav-bar-link"
                                    : "nav-link nav-bar-link"
                            }role="tab"
                                  aria-controls="v-pills-home" aria-selected="true" >
                                <img src={notification} alt="home-icon" className="icon-nav-bar"/>

                                <CDBSidebarMenuItem className="item">

                                    Account
                                </CDBSidebarMenuItem>
                            </Link>

                            {/*<a className="nav-link nav-bar-link" id="v-pills-settings-tab" data-toggle="pill"*/}
                            {/*   href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"*/}
                            {/*   aria-selected="false">*/}
                            {/*    <img src={account} alt="home-icon" className="icon-nav-bar"/>*/}

                            {/*    <CDBSidebarMenuItem className="item">*/}

                            {/*        Account*/}
                            {/*    </CDBSidebarMenuItem>*/}
                            {/*</a>*/}



                        </div>
                        {/*<NavLink exact to="/parent-dashboard-home   " activeClassName="activeClicked" >*/}
                        {/*    <CDBSidebarMenuItem >*/}
                        {/*        <Time/>*/}
                        {/*    </CDBSidebarMenuItem>*/}
                        {/*</NavLink>*/}
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{textAlign: 'center'}}>
                    <div className="btn-footer">
                        <div
                            className="time-section" style={{
                            padding: "5px"
                        }}
                        >
                            <Time/>
                        </div>

                        <Link to={"/"}>
                            <div className="log-out-section">
                                <button type="button" className="btn btn-rounded log-out-btn">Logout</button>
                            </div>
                        </Link>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>

    );
}

export default StudentNavBar;