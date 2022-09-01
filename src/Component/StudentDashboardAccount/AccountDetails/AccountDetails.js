import React from "react";

function StudentAccDetails() {
    return (
        <div className="main-div-class">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="email" className="form-control" id="fullName" aria-describedby="emailHelp"
                       placeholder="Full name" disabled/>
            </div>


            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Name with Initials</label>
                    <input type="text" className="form-control" id="iName" placeholder="Name with Initials" disabled/>
                </div>
                <div className="form-group col-md-6">
                    <label >Guardian Name</label>
                    <input type="text" className="form-control" id="PName" placeholder="Guardian Name" disabled/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Date of Birth</label>
                    <input type="text" className="form-control" id="dob"  placeholder="Date Of Birth" disabled/>
                </div>
                <div className="form-group col-md-6">
                    <label >Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Gender" disabled/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Address</label>
                <input type="email" className="form-control" id="fullName"
                       placeholder="Address" disabled/>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Home Town</label>
                    <input type="text" className="form-control" id="home-town" placeholder="Home Town" disabled/>
                </div>
                <div className="form-group col-md-6">
                    <label >Emergency Contact Number</label>
                    <input type="text" className="form-control" id="dob"  placeholder="Emergency Contact Number" disabled/>
                </div>

            </div>

        </div>
    );

}

export default StudentAccDetails;