import React from "react";
import "./App.css";

function CustomerProfile(props) {
  return (
    <>
      <div>
        <p>{props.CustomerProfile}</p>
        <p>{props.customerID}</p>
      </div>
    </>
  );
}

export default CustomerProfile;
