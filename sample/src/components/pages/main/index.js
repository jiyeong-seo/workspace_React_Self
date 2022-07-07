import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/main/styles.css";

const main = () => {
  return (
    <div className="main">
      <section className="main-back">
        <header>
          <div className="main-content">
            <h1>stay adorable</h1>
          </div>
        </header>
        <div className="main-backcover"></div>
      </section>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/drink">Drink</Link>
          </li>
          <li>Bakery</li>
          <li>Store</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default main;
