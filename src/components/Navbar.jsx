import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [color, setColor] = useState(true);
  return (
    <div
      className={`navbar bg-base-100 w-11/12 mx-auto rounded-t-2xl px-2 md:px-20 ${
        color ? "bg-primary text-white" : "bg-fourth text-myDark3"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] text-black mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              onClick={() => setColor(true)}
              className={({ isActive }) =>
                `${isActive ? "underline font-bold" : ""} mr-8`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              onClick={() => setColor(false)}
              className={({ isActive }) =>
                `${isActive ? "text-primary underline font-bold" : ""} mr-8`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashboard"
              onClick={() => setColor(false)}
              className={({ isActive }) =>
                `${isActive ? "text-primary underline font-bold" : ""} mr-8`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <h2 className="hidden lg:block text-2xl font-semibold">
          Gadget Heaven
        </h2>
      </div>
      <h2 className="w-2/3 block lg:hidden text-xl font-semibold">
        Gadget Heaven
      </h2>

      <div className="hidden lg:block">
        <NavLink
          to="/"
          onClick={() => setColor(true)}
          className={({ isActive }) =>
            `${isActive ? "underline font-bold" : ""} mr-8`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/statistics"
          onClick={() => setColor(false)}
          className={({ isActive }) =>
            `${isActive ? "text-primary underline font-bold" : ""} mr-8`
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to="/dashboard"
          onClick={() => setColor(false)}
          className={({ isActive }) =>
            `${isActive ? "text-primary underline font-bold" : ""} mr-8`
          }
        >
          Dashboard
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <span className="text-2xl">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </span>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator text-xl">
                <i className="fa-regular fa-heart"></i>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
