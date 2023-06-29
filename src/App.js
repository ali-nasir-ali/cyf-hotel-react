import React, { useState } from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import UrlNotWorking from "./UrlNotWorking";

const App = () => {
  const [pageHasError, setPageHasError] = useState(false);

  if (pageHasError) {
    return <UrlNotWorking />;
  }
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings setPageHasError={setPageHasError} />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
