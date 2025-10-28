// src/routes/Routers.jsx
import { Routes, Route } from "react-router-dom";
import { HomePage, OtherAi, Booking, TourBookingFlow } from "../Pages/Pages";
import Layout from "../components/Layout/Layout";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="other-ai" element={<OtherAi />} />
        <Route path="booking" element={<Booking />} />
        <Route path="tour-booking-flow" element={<TourBookingFlow />} />
      </Route>
    </Routes>
  );
}

export default Routers;
