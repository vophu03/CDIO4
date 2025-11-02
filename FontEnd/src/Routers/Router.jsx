// src/routes/Routers.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// DIRECT imports (safer, no barrel)
import Layout from "../components/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import Tours from "../Pages/TourTab/Tours";                // <-- ensure this file exists
import Booking from "../Pages/Booking/Booking";
import TourBookingFlow from "../Pages/TourBookingFlow/TourBookingFlow";
import OtherAi from "../Pages/OtherAi/OtherAi";
import Contact from "../Pages/Contact/Contact"; // <-- thêm import Contact

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tours" element={<Tours />} />
        <Route path="booking" element={<Booking />} />
        <Route path="tour-booking-flow" element={<TourBookingFlow />} />
        <Route path="other-ai" element={<OtherAi />} />
        <Route path="contact" element={<Contact />} /> {/* <-- route mới */}
      </Route>
    </Routes>
  );
}

export default Routers;
