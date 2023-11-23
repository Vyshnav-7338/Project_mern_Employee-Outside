import React, { useState } from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/search?Aadhaar=${searchTerm}`
      );
      const data = await response.json();

      if (data && !data.error) {
        navigate("/user", { state: { aadhaarDetails: data } });
      } else {
        console.log("Aadhaar not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <header>
      <div className="container container-header">
        <div className="row">
          <div className="col-12 mr-auto ml-auto">{/* <h1>welcome</h1> */}</div>
          <div className="wrapper col-12">
            <input
              type="text"
              className="input"
              placeholder="Search Aadhar Number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div
              className="searchbtn"
              onClick={() => {
                if (!searchTerm) {
                  navigate("/");
                } else {
                  handleSearch();
                }
              }}
            >
              <BsSearch className="icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
