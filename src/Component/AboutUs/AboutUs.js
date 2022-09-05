import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import "./AbountUs.css"
import about from "../../Assets/AboutUs/AboutUs.svg"
function AboutUsComp() {
    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src={about} alt="" className="img-pic"/>

                </MDBCol>

                <MDBCol col='4' md='6'>

                    //

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default AboutUsComp;