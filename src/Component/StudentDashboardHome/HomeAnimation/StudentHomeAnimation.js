import React from "react";
import "./StudentHomeAnimation.css"
import animation from "../../../Assets/Img/student.jpg"

function StudentHomeAnimation() {
    return (
        <>
            <div className="shadow p-3 mb-5 bg-white rounded animation-div">
                <img src={animation} alt="animation" className="home-page-animation"/>

            </div>
        </>
    );
}

export default StudentHomeAnimation;