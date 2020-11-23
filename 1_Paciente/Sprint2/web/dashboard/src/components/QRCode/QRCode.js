/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Coded by Creative Tim
* Modified by Aline Rodrigues
* Data: 23-11-2020

=========================================================

*/
import React, { Component } from "react";

import icon from "assets/img/qr-code.png";

var iconStyle = {
  width: "40px",
  height: "40px",
  padding: "8px",
  margin: '3px'
};

class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown"
    };
  }
  handleClick = () => {
    if (this.state.classes === "dropdown show-dropdown") {
      this.setState({ classes: "dropdown show-dropdown show" });
    } else {
      this.setState({ classes: "dropdown show-dropdown" });
    }
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <img style={iconStyle} src={icon} alt="qrcode"></img>
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">PACIENTE</li>
            <li className="adjustments-line">
              <div id="qrcode"></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default QRCode;
