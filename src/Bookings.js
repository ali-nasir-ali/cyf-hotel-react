import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [booking, setBooking] = useState(FakeBookings);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };
  const [customerId, setCustomerId] = useState("test customer id state");
  const [customerProfile, setCustomerProfile] = useState(
    "test customer profile state"
  );

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults
          booking={booking}
          setCustomerId={setCustomerId}
          setCustomerProfile={setCustomerProfile}
        />
        <CustomerProfile
          customerId={customerId}
          customerProfile={customerProfile}
        />
        {/* This component should receive one prop id */}
      </div>
    </div>
  );
};

export default Bookings;
