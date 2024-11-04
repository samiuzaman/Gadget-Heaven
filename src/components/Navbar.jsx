import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(true);
  return (
    <div
      className={`w-11/12 mx-auto sticky navbar rounded-t-2xl  px-16 ${
        color ? "bg-primary text-white" : "text-myDark3"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden btn btn-ghost btn-circle"
          >
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
        </div>
        <h2 className="hidden lg:block text-2xl font-semibold">
          Gadget Heaven
        </h2>
      </div>

      <h2 className="w-2/3 block lg:hidden text-xl font-semibold">
        Gadget Heaven
      </h2>

      <div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
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
              <div className="indicator">
                <i className="text-lg fa-regular fa-heart"></i>
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
