import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const NavBackground = createContext(true);

const Layout = () => {
  const [color, setColor] = useState(true);
  return (
    <div>
      <NavBackground.Provider value={[color, setColor]}>
        <Navbar></Navbar>
        <div className=" pt-6 pb-12">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </NavBackground.Provider>
    </div>
  );
};

export default Layout;
