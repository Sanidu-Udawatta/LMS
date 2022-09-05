import React, {useState} from 'react';
import typing from "../../Assets/Admin/Admin-bro.svg";
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
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

function AdminLoginComp() {
    const [justifyActive, setJustifyActive] = useState('tab1');
    ;

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

                    <div className="col-md-9 col-lg-6 col-xl-5 ">

                        <div className="d-flex flex-row align-items-center justify-content-center logo-section-res">
                            <p className="lead fw-normal mb-1 me-3 line-height "><span
                                className="admin-name-res">SIPHALA</span></p>
                        </div>

                        <img src={typing}
                             className="img-fluid main-img-section" alt="Sample image"/>
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <div className="d-flex flex-row align-items-center justify-content-center logo-section">
                            <img src={logo} alt="Sphala-Logo" className="logo-img mb-1"/>
                            <p className="lead fw-normal mb-1 me-3 line-height "><span
                                className="admin-name">SIPHALA <br/>
                            Admin Panel</span>
                            </p>

                        </div>

                        <MDBContainer className="main-section">


                            <MDBTabsContent>

                                <MDBTabsPane show={justifyActive === 'tab1'}>


                                    <MDBInput wrapperClass='mb-4' className="input-data" label='Email address'
                                              id='email' type='email' name="email"/>
                                    <MDBInput wrapperClass='mb-4' className="input-data" label='Password' id='password'
                                              type='password' name="password"/>

                                    <Link to="/admin">
                                        <MDBBtn className="mb-4 w-100 input-data login-btn">Login</MDBBtn>
                                    </Link>

                                </MDBTabsPane>


                            </MDBTabsContent>

                        </MDBContainer>

                    </div>
                </div>
            </div>

        </section>

    );
}

export default AdminLoginComp;