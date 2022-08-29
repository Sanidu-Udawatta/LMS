import "./LoginPageComponent.css"
import React, { useState } from 'react';
import typing from "../../Assets/Images/Typing-bro.svg"
import logo from "../../Assets/logo.png"
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}from 'mdb-react-ui-kit';

function SignInCom() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={typing}
                             className="img-fluid" alt="Sample image"/>
                    </div>


                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <div className="d-flex flex-row align-items-center justify-content-center">
                            <img src={logo} alt="Sphala-Logo" className="logo-img"/>
                            <p className="lead fw-normal mb-0 me-3 line-height "><span
                                className="admin-name">SIPHALA</span></p>

                        </div>

                        <MDBContainer className="main-section">

                            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                                <div className="student">

                                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                        Student
                                    </MDBTabsLink>
                                </div>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                        Parent
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>

                                <MDBTabsPane show={justifyActive === 'tab1'}>



                                    <MDBInput wrapperClass='mb-4' className="input-data" label='Email address' id='email' type='email' name="email"/>
                                    <MDBInput wrapperClass='mb-4' className="input-data" label='Password' id='password' type='password' name="password"/>


                                    <MDBBtn className="mb-4 w-100 input-data" >Login</MDBBtn>


                                </MDBTabsPane>

                                <MDBTabsPane show={justifyActive === 'tab2'}>



                                    <MDBInput wrapperClass='mb-4' className="input-data" label='Name' id='form1' type='text'/>
                                    <MDBInput wrapperClass='mb-4' className="input-data" label='password' id='form1' type='password'/>


                                    <MDBBtn className="mb-4 w-100 input-data">Login</MDBBtn>

                                </MDBTabsPane>

                            </MDBTabsContent>

                        </MDBContainer>

                    </div>
                </div>
            </div>

        </section>

    );
}

export default SignInCom;