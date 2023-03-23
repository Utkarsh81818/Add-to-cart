import React from "react";
import "../../App.css";

const Error = () => {
  return (
    <div className="error">
      <div className="errorDetails">
      <div>
        <h1> 404 Page Not Found </h1>
      </div>
      <div className="message">
        <p> Sorry, This page doesn't exist</p>
      </div>
    </div>
    </div>
  );
};

export default Error;
