import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Moonlit</Link> {/* Link to home */}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link> {/* Corrected the path */}
          </li>
          <li>
            <Link to="/add-book">Add Book</Link> {/* Corrected the path */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Corrected the path */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
