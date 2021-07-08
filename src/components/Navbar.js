import React from "react";

import logo from "../images/badge-header.svg";

class Navbar extends React.Component {
  render() {
    return (
      <a href="/">
        <img src={logo} alt="Logo" />
        <span className="">Platzi</span>
        <span>Conf</span>
      </a>
    );
  }
}
export default Navbar;
