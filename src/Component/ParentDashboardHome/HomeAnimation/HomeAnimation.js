import React from "react";
import "./HomeAnimation.css"
import parent from "../../../Assets/Img/perant.jpg"

function HomeAnimation() {
    return (
        <>
            <div className="shadow p-3 mb-5 bg-white rounded animation-div">
                <img src={parent} alt="animation" className="parent-animation"/>

            </div>
        </>
    );
}

export default HomeAnimation;