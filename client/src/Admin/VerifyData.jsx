import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Admin";
import axios from "axios";
function VerifyData() {
  const location = useLocation();
  const navigate = useNavigate();
  const pendingData = location.state?.pendingData;
  const id = pendingData._id;
  const handleApproval = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/approve/${id}`);

      if (response.data.success) {
        console.log("Status updated to Approved");
        navigate("/Admin");
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  const handleReject = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/Reject/${id}`);

      if (response.data.success) {
        console.log("Status updated to Reject");
        navigate("/Admin");
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  return (
    <div className="container-user">
      <h1>User Details</h1>
      <div>
        <img
          className="image-Profile"
          src={"http://localhost:3001/images/" + pendingData.Photo.filename}
          alt="User"
        />
      </div>
      <div className="user-info">
        <h3>
          {" "}
          {pendingData.FirstName} {pendingData.LastName}
        </h3>
        <p>Phone : {pendingData.phone}</p>
        <p>Address : {pendingData.Address}</p>
        <p>Alternative Number : {pendingData.AlternativeNumber}</p>
        <p>Aadhaar Number : {pendingData.Aadhaar}</p>
        <div className="user-imgs">
          <a
            href={
              "http://localhost:3001/images/" + pendingData.IdProof.filename
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                "http://localhost:3001/images/" + pendingData.IdProof.filename
              }
              alt=""
              className="img-id"
            />
          </a>
          <a
            href={
              "http://localhost:3001/images/" +
              pendingData.policeClearCertificate.filename
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                "http://localhost:3001/images/" +
                pendingData.policeClearCertificate.filename
              }
              alt=""
              className="img-id"
            />
          </a>
        </div>
        <br />
        <p>Status : {pendingData.Status}</p>
      </div>
      <div className="btn-style">
        {pendingData.Status === "Approved" && (
          <button className="btn-Approved" onClick={() => navigate("/Admin")}>
            Approved
          </button>
        )}

        {pendingData.Status === "Rejected" && (
          <button className="btn-Rejected" onClick={() => navigate("/Admin")}>
            Rejected
          </button>
        )}

        {pendingData.Status === "pending" && (
          <>
            <button className="btn-Approved" onClick={handleApproval}>
              Approved
            </button>
            <button className="btn-Rejected" onClick={handleReject}>
              Rejected
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default VerifyData;
