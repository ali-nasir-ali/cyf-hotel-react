import react, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function EachRowInSearchResults(props) {
  const [switchMe, setSwitchMe] = useState("off");

  function handleClick() {
    if (switchMe === "off") {
      setSwitchMe("on");
    } else {
      setSwitchMe("off");
    }
  }

  const [customerID, setCustomerId] = useState("");
  // const customerProfileText = "";
  function handleShowProfile() {
    // When clicking on a "Show profile" button for a given row, //
    //the component <CustomerProfile /> should display the text "Customer Profile",
    //where is the id of the selected customer.
    //Initially, the <CustomerProfile /> component doesn't show anything.//
    return (
      <CustomerProfile
        customerProfileText="Customer Profile"
        customerId={props.booking.id}
      />
    );
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
