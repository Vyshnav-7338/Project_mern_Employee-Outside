import React from "react";
import "./UserDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const aadhaarDetails = location.state?.aadhaarDetails;
  if (aadhaarDetails.Status === "pending") {
    return (
      <div className="container-pending">
        <h2>Admin not Approved</h2>
      </div>
    );
  } else if (aadhaarDetails.Status === "Rejected") {
    return (
      <div className="container-pending">
        <h2>Admin Rejected Person</h2>
      </div>
    );
  }
  return (
    <div className="container-user">
      <h1>User Details</h1>
      <div>
        <img
          className="image-Profile"
          src={"http://localhost:3001/images/" + aadhaarDetails.Photo.filename}
          alt="User"
        />
      </div>
      <div className="user-info">
        <h3>
          {" "}
          {aadhaarDetails.FirstName} {aadhaarDetails.LastName}
        </h3>
        <p>Phone : {aadhaarDetails.phone}</p>
        <p>Address : {aadhaarDetails.Address}</p>
        <p>AlternativeNumber : {aadhaarDetails.AlternativeNumber}</p>
      </div>
      <button className="back-btnn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default UserDetails;
