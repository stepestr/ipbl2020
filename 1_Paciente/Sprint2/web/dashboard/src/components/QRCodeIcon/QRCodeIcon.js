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
import Select from 'react-select';

import icon from "assets/img/qr-code.png";

var QRCode = require('qrcode.react');

/* 
  Dados do Endpoint informados pelo Luan (Team Scrum #2)
  23/11/2020 às 21:20, via whatsapp do Everton
              
*/

// Endpoint
const QRCodeURL = 'http://54.196.179.100:3000/api/qrcode/';

const iconStyle = {
  width: "40px",
  height: "40px",
  padding: "8px",
  margin: '3px'
};

const canvasStyle = {
  paddingTop: "15px",
  textAlign: 'center'
};

class QRCodeIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown",
      valueQRCode: ''
    };
  }

  handleClick = () => {
    if (this.state.classes === "dropdown show-dropdown") {
      this.setState({ classes: "dropdown show-dropdown show" });
    } else {
      this.setState({ classes: "dropdown show-dropdown" });
    }
  };

  handleChange = (selectedPerson) => {
    this.setState({valueQRCode: QRCodeURL + selectedPerson.hos_per_id});
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
                  <Select
                    label="Selecione o paciente"
                    name="Paciente"
                    options={this.props.persons}
                    className="basic-select"
                    classNamePrefix="select"
                    onChange={this.handleChange}
                  />         
            </li>
            <li className="button-container">
              <div style={canvasStyle}>
                <QRCode value={this.state.valueQRCode} size='200' />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default QRCodeIcon;
