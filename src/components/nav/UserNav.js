import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <div className="admin-nav">
    <ul className=" main-nav">
      <li className="nav-item">
        <Link to="/user-history" className="nav-link">
          History
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user-password" className="nav-link">
          Password
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user-wishlist" className="nav-link">
          Wishlist
        </Link>
      </li>
    </ul>
  </div>
);

export default UserNav;
