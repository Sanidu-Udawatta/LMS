import React from "react";
import "./ActivityOne.css"
import jira from "../../../Assets/Puzzel/1.jpg"
import fox from "../../../Assets/Puzzel/2.jpg"
import bare from "../../../Assets/Puzzel/3.jpg"
import snake from "../../../Assets/Puzzel/4.jpg"
import ele from "../../../Assets/Puzzel/5.jpg"
import lion from "../../../Assets/Puzzel/6.jpg"

export default function ActivityOne() {
    return (
        <>
            <div className="first-puzzle">
                <img src={jira} alt=""/>
                <div className="sub-input">
                    <input type="text" className="inout-jira" maxlength = "1"  pattern="[A-Za-z]"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>

                </div>

            </div><div className="first-puzzle">
                <img src={ele} alt=""/>
                <div className="sub-input">
                    <input type="text" className="inout-jira" value="E"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>

                </div>

            </div><div className="first-puzzle">
                <img src={bare} alt=""/>
                <div className="sub-input">
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>

                </div>


            </div><div className="first-puzzle">
                <img src={snake} alt=""/>
                <div className="sub-input">
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>

                </div>

            </div><div className="first-puzzle">
                <img src={lion} alt=""/>
                <div className="sub-input">
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>
                    <input type="text" className="inout-jira" maxlength = "1"/>

                </div>

            </div>


        </>

    );

}