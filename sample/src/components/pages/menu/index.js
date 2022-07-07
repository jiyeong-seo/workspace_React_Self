import React from "react";
import Menu from "../../oganisms/Menu";
import { Link } from "react-router-dom";

import "../../../styles/menu/styles.css";

const menu = () => {
  return (
    <div>
      <div className="drink-back">
        <div className="drink-backcover"></div>
        <div>
          <h1 className="drink-content-text">
            <Link to="/main">Stay Adorable</Link>
          </h1>
        </div>
        <div className="drink-menu"></div>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default menu;
