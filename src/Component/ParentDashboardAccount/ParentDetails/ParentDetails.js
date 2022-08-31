import React from "react";

function ParentsDetails() {
    return (
        <>
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
                    <label >Occupation</label>
                    <input type="text" className="form-control" id="Occupation" placeholder="Occupation"  disabled   />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Contact Number</label>
                    <input type="tel" className="form-control" id="tel"  placeholder="Contact Number"  disabled/>
                </div>
                <div className="form-group col-md-6">
                    <label >Email</label>
                    <input type="Email" className="form-control" id="email" placeholder="Email" disabled/>
                </div>
            </div>


        </>
    );

}

export default ParentsDetails;