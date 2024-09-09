import React from "react";
import { Link, NavLink } from "react-router-dom"; // NavLink automatically applies class .active to active link

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/" className="title">
          Seung-hwan Leo Kim
        </Link>
        <span id="korean-name">(김승환)</span>
      </div>
      <ul>
        <li>
          <NavLink to="/interests">Interests</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};
