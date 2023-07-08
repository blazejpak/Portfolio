import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
