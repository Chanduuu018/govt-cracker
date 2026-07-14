import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SSC from "../pages/exams/ssc/Dashboard";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ssc" element={<SSC />} />
    </Routes>
  );
};

export default AppRoutes;