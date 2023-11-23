import React, { useEffect } from "react";
import { Steps } from "antd";
import {
  CheckCircleOutlined,
  ProfileOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Admin() {
  const [current, setCurrent] = useState(0);

  const forms = [<Pending />, <Approved />, <RejectDetails />];

  return (
    <div className="container steps">
      <Steps
        style={{ padding: "30px 16px" }}
        onChange={setCurrent}
        current={current}
      >
        <Steps.Step title="PendingDetails" icon={<ProfileOutlined />} />
        <Steps.Step title="ApprovedDetails" icon={<CheckCircleOutlined />} />
        <Steps.Step title="RejectDetails" icon={<StopOutlined />} />
      </Steps>
      {forms[current]}
    </div>
  );
}

function Pending() {
  const [pendingData, setPendingData] = useState([]);
  const navigate = useNavigate();

  const verifyData = (data) => {
    navigate("/verifyData", { state: { pendingData: data } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/pendingStatus"
        );
        setPendingData(response.data);
      } catch (error) {
        console.error("Error fetching pending status:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container pendingStyle ">
      {pendingData.map((data) => (
        <div key={data._id} className="user-frame">
          <h3>
            {data.FirstName} {data.LastName}
          </h3>
          <button className="button-pending" onClick={() => verifyData(data)}>
            Verify Details
          </button>
        </div>
      ))}
    </div>
  );
}
function Approved() {
  const [pendingData, setPendingData] = useState([]);
  const navigate = useNavigate();

  const verifyData = (data) => {
    navigate("/verifyData", { state: { pendingData: data } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/ApprovedStatus"
        );
        setPendingData(response.data);
      } catch (error) {
        console.error("Error fetching Approved status:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container pendingStyle ">
      {pendingData.map((data) => (
        <div key={data._id} className="user-frame">
          <h3>
            {data.FirstName} {data.LastName}
          </h3>
          <button className="button-Approved" onClick={() => verifyData(data)}>
            Approved
          </button>
        </div>
      ))}
    </div>
  );
}

function RejectDetails() {
  const [pendingData, setPendingData] = useState([]);
  const navigate = useNavigate();

  const verifyData = (data) => {
    navigate("/verifyData", { state: { pendingData: data } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/RejectedStatus"
        );
        setPendingData(response.data);
      } catch (error) {
        console.error("Error fetching Rejected status:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container pendingStyle ">
      {pendingData.map((data) => (
        <div key={data._id} className="user-frame">
          <h3>
            {data.FirstName} {data.LastName}
          </h3>
          <button className="button-Rejected" onClick={() => verifyData(data)}>
            Rejected
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
