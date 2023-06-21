import React from "react";
import "./App.css";

function CustomerProfile(props) {
  return (
    <>
      <div>
        {props.CustomerProfile}
        {props.customerID}
      </div>
    </>
  );
}

export default CustomerProfile;
