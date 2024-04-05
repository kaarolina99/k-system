import React from "react";
import "./App.css";
import profileImg from "./profileImg.png";
import homeImg from "./homeImg.jpeg";

export default function Navbar() {
  return (
    <nav className="Navbar_css">
      <ul className="Links">
        <li>
          <a href="/">
            {" "}
            <img src={homeImg} alt="Home button" className="HomeImg" />
          </a>
        </li>
        <li>
          <a href="src/login_component/App">
            <img src={profileImg} alt="Profile button" className="ProfileImg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
