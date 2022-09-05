import React from "react";
import "./Description.css"
import backgroundPic from "../../../Assets/Home/kisd-lms.svg"

function Description() {
    return (
        <div className='description-main'>

            <section className="">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-md-8 col-lg-6 col-xl-4 ">
                            <form>

                                <p className="heading-name">Wlcome To <br/> SIPHALA</p>
                                <p className="dis-par">Experience The Best Online Platform To The
                                    Grade 1 Students.</p>

                            </form>
                        </div>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={backgroundPic}
                                 className="img-fluid" alt="Sample image"/>
                        </div>
                    </div>

                </div>

            </section>


        </div>

    );
}
export default Description;