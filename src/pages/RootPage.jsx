import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../helpers/ScrollToTop";

const RootPage = () => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
