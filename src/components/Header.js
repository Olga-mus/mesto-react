import React from "react";
import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Мэсто" className="header__logo" />
    </header>
  );
}

export default Header;
