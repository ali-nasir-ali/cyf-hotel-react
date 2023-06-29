import react, { useState } from "react";

function EachRowInSearchResults(props) {
  const [switchMe, setSwitchMe] = useState("off");

  function handleClick() {
    if (switchMe === "off") {
      setSwitchMe("on");
    } else {
      setSwitchMe("off");
    }
  }
  const customerProfileIsBeingShown = props.booking.id === props.customerId;

  function handleShowProfile() {
    //check here if the props.booking.id is same as customer id then setCustomerId=""
    //this is for double
    if (customerProfileIsBeingShown) {
      props.setCustomerId("");
    } else {
      props.setCustomerId(props.booking.id);
    }
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
          {customerProfileIsBeingShown ? "Hide profile" : "Show profile"}
        </button>
      </td>
    </tr>
  );
}

export default EachRowInSearchResults;
