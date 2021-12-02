import React from "react";
import "../styles.css";
import "../tailwind.output.css";
import { HiOutlineHome } from "react-icons/hi";
import { GiTestTubes } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { GiStaticWaves } from "react-icons/gi";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Contact from "./content/Contact";
import Home from "./content/Home";
import Stats from "./content/Stats";
import Tests from "./content/Tests";
import Admin from "./content/Admin";
import { AnimatePresence} from "framer-motion"

function AppBar() {
  return (
    <Router>
      <div className=" fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900  text-white shadow-lg">
        <Link to="/">
          <SideBarIcon icon={<HiOutlineHome size="20" />} />{" "}
        </Link>
        <Link to="/tests">
          <SideBarIcon icon={<GiTestTubes size="20" />} />{" "}
        </Link>
        <Link to="/Admin">
          <SideBarIcon icon={<RiAdminFill size="20" />} />{" "}
        </Link>
        <Link to="/stats">
          <SideBarIcon icon={<GiStaticWaves size="20" />} />{" "}
        </Link>
        <Link to="/contact">
          <SideBarIcon icon={<MdContactSupport size="20" />} />{" "}
        </Link>
      </div>
      <AnimatePresence>
      <div >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      </AnimatePresence>
    </Router>
  );
}

const SideBarIcon = ({ icon }) => (
  <div className=" relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-800 text-blue-300 shadow-lg hover:bg-blue-300 hover:text-white rounded-full transision-all duration-300 ease-linear cursor-pointer group">
    {icon}
  </div>
);

export default AppBar;
