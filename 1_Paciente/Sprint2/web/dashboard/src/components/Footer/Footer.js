/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Coded by Creative Tim
* Modified by Aline Rodrigues
* Data: 04-10-2020

=========================================================

*/
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="https://sites.google.com/view/stepes-tr">STEPES-TR</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made {" "} by{" "}TS#01
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
