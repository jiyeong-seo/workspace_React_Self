import React from "react";

import "../../../styles/main/styles.css";

import Menu from "../../oganisms/Menu";

const main = () => {
  return (
    <div className="main">
      <section className="main-back">
        <header>
          <div className="main-content">
            <h1>Stay Adorable</h1>
          </div>
        </header>
        <div className="main-backcover"></div>
      </section>
      <Menu />
    </div>
  );
};

export default main;
