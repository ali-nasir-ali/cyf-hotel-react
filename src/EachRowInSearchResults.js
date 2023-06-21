import react, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function EachRowInSearchResults(props) {
  const [switchMe, setSwitchMe] = useState("off");
  const setCustomerId = props.setCustomerId;
  const setCustomerProfile = props.setCustomerProfile;
  function handleClick() {
    // if (switchMe === "off") {
    //   setSwitchMe("on");
    // } else {
    //   setSwitchMe("off");
    // }
  }

  // const customerProfileText = "";
  function handleShowProfile() {
    setCustomerId(props.booking.id);
    setCustomerProfile("Customer Profile");
  }

  return (
    <tr className={switchMe} onClick={handleClick}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{props.numberOfNights}</td>
      <td>
        <button onClick={handleShowProfile} className="btn btn-primary">
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default EachRowInSearchResults;
