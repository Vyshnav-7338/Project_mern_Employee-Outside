import React from "react";
import "./Page404.css";
import { useNavigate } from "react-router-dom";
function Page404() {
  const Navigate = useNavigate();
  return (
    <div className="container pages404">
      <div className="page404">
        <h2 className="head404">404</h2>
        <p className="para404">Page Not Found</p>
        <button className="btn-err" onClick={() => Navigate("/")}>
          Back To Home
        </button>
      </div>
    </div>
  );
}

export default Page404;
