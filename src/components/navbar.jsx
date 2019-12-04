import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import authService from "../services/authService";

class NavBar extends Component {
  state = {
    token: ""
  };

  componentDidMount = () => {
    const t = localStorage.getItem("token");
    this.setState({ token: t });
  };

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link className="navbar-brand" to="/home">
              BooksEasy
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              {authService.getCurrentUser() && (
                <React.Fragment>
                  <Nav.Link>
                    <Link to="/users">Users</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/books">Books</Link>
                  </Nav.Link>
                </React.Fragment>
              )}
            </Nav>
            <NavDropdown title="Cart" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Item 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Item 3</NavDropdown.Item>
            </NavDropdown>

            {!this.state.token && (
              <NavLink
                className="nav-item nav-link"
                to="/login"
                style={{ margin: "0px", padding: "0px", border: "0px" }}
              >
                <Button variant="outline-success" style={{ margin: "10px" }}>
                  Login
                </Button>
              </NavLink>
            )}
            {!this.state.token && (
              <NavLink
                className="nav-item nav-link"
                to="/signUp"
                style={{ margin: "0px", padding: "0px", border: "0px" }}
              >
                <Button variant="outline-success" style={{ margin: "10px" }}>
                  SignUp
                </Button>
              </NavLink>
            )}
            {this.state.token && (
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {this.state.token && (
              <NavLink
                className="nav-item nav-link"
                to="/logout"
                style={{ margin: "0px", padding: "0px", border: "0px" }}
              >
                <Button variant="outline-success" style={{ margin: "10px" }}>
                  SignOut
                </Button>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
