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
        <li>
          <a
            href="https://map.naver.com/v5/search/%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%96%B4%EB%8F%84%EB%9F%AC%EB%B8%94/place/1792082184?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14149201.8588573,4484008.7311473,15,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cafe_stay_adorable/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
