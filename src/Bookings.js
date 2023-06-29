import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  // const [customerProfile, setCustomerProfile] = useState("");
  const [customerId, setCustomerId] = useState("");
  // const [view, setView] = useState("viewOff");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        const urlNotWorking = "Not Found";
        setBookings(urlNotWorking);
        setIsLoading(false);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const searchedBookings = bookings.filter(
      (searchedNames) =>
        searchedNames.firstName
          .toLowerCase()
          .includes(searchVal.toLowerCase()) ||
        searchedNames.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredBookings(searchedBookings);
  };

  if (bookings === "Not Found") {
    props.setPageHasError(true);
  }

  if (isLoading) {
    // return <div>Loading...</div>;
    return <div className="loading-wheel"></div>;
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          booking={filteredBookings}
          setCustomerId={setCustomerId}
          customerId={customerId}
        />
        {!!customerId && <CustomerProfile customerId={customerId} />}
      </div>
    </div>
  );
};

export default Bookings;
