import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/nafes"> <i className="pi pi-sign-out"></i> </Link>
          </li>
          <li>
            <Link to="/nafes/user"><i className="pi pi-bell"></i></Link>
          </li>
          <li>
            <Link to="/nafes/user"><i className="pi pi-comments"></i></Link>
          </li>
        </ul>

        <div className="logo">
          <Link to={"/"} />
        </div>
      </div>
    </nav>
  );
};
