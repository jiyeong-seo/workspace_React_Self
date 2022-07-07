import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/menu/styles.css";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>Store</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
